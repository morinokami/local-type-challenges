import { parse } from "jsr:@std/yaml";
import ora from "npm:ora@8.0.1";
import pLimit from "npm:p-limit@5.0.0";
import { typeChallengesSolutions } from "@/type-challenges-solutions.ts";

if (import.meta.main) {
  alert(
    "This will overwrite all challenges. Are you sure you want to continue?",
  );

  try {
    Deno.removeSync("challenges", { recursive: true });
  } catch (_) {
    // ignore
  }
  Deno.mkdirSync("challenges");

  const questionsUrl =
    "https://api.github.com/repos/type-challenges/type-challenges/contents/questions";
  const response = await fetch(questionsUrl);
  const questions = (await response.json() as { name: string }[]).map((q) =>
    q.name
  );

  const spinner = ora("Syncing challenges").start();

  const limit = pLimit(3);
  await Promise.all(questions.map((question) =>
    limit(async () => {
      const questionUrl =
        `https://raw.githubusercontent.com/type-challenges/type-challenges/main/questions/${question}`;
      const [readme, info, template, testCases] = await Promise.all([
        (await fetch(`${questionUrl}/README.md`)).text(),
        (await fetch(`${questionUrl}/info.yml`)).text(),
        (await fetch(`${questionUrl}/template.ts`)).text(),
        (await fetch(`${questionUrl}/test-cases.ts`)).text(),
      ]);
      const parsedInfo = parseInfo(info);

      const exercise = generateChallenge(
        parsedInfo.title,
        parsedInfo.author,
        readme,
        template,
        testCases,
        Number(question.split("-")[0]),
      );

      Deno.mkdirSync(`challenges/${parsedInfo.difficulty}/${question}`, {
        recursive: true,
      });
      Deno.writeTextFileSync(
        `challenges/${parsedInfo.difficulty}/${question}/index_test.ts`,
        exercise,
      );
    })
  ));

  spinner.succeed("Synced all challenges");
  Deno.exit(0);
}

function getReadMeContent(readme: string) {
  return readme
    .replace(
      /<!--info-header-start-->[\s\S]*<!--info-header-end-->/g,
      "",
    )
    .replace(
      /<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/g,
      "",
    )
    .trim();
}

function parseInfo(info: string) {
  return parse(info) as {
    title: string;
    author: { name: string; github: string };
    difficulty: "warm" | "easy" | "medium" | "hard" | "extreme";
  };
}

function generateChallenge(
  title: string,
  author: { name: string; github: string },
  readme: string,
  template: string,
  testCases: string,
  questionNumber: number,
) {
  let importStatement = "";
  let cases: string[] = [];
  const testCasesContent = testCases.split("\n");
  if (testCasesContent[0].includes("import")) {
    importStatement = testCasesContent[0].replace(
      "@type-challenges/utils",
      "@/utils.ts",
    );
    cases = testCasesContent.slice(1);
  } else {
    cases = testCasesContent;
  }

  return `${importStatement};

Deno.test("${title}", () => {
  /*
   * Author: ${author.name} (@${author.github})
   *
${getReadMeContent(readme).split("\n").map((l) => `   * ${l}`).join("\n")}
   */

  /* _____________ Your Code Here _____________ */
  ${template.split("\n").map((l) => `  ${l}`).join("\n").trim()}

  /* _____________ Test Cases _____________ */
  ${cases.map((l) => `  ${l}`).join("\n").trim()}

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/${questionNumber}/answer
   * > View solutions on GitHub: https://tsch.js.org/${questionNumber}/solutions
${getSolution(questionNumber)}
   * > Discover more challenges: https://tsch.js.org
   */
});`;
}

function getSolution(questionNumber: number) {
  const solution = typeChallengesSolutions[`${questionNumber}`];
  return solution
    ? `   * > View solutions on Type Challenges Solutions: ${solution}`
    : "";
}
