import { writeAllSync } from "jsr:@std/io/write-all";
import chalk from "npm:chalk@5.3.0";

if (import.meta.main) {
  const difficulties = getDifficulties();
  await check(difficulties);
}

export function getDifficulties() {
  const difficulties = ["warm", "easy", "medium", "hard", "extreme"];
  return Deno.args.length > 0 &&
      Deno.args.every((arg) => difficulties.includes(arg))
    ? Deno.args
    : difficulties;
}

export async function check(difficulties: string[]) {
  console.clear();
  await typeCheck(difficulties);
}

async function typeCheck(difficulties: string[]) {
  const challenges = getChallenges(difficulties);
  const numChallenges = Object.values(challenges).reduce(
    (acc, val) => acc + val.length,
    0,
  );

  let challengeIndex = 0;
  let typeCheckFailed = false;
  for (const difficulty of difficulties) {
    for (const challenge of challenges[difficulty]) {
      const progress = calculateProgress(challengeIndex, numChallenges);
      writeAllSync(Deno.stdout, progress);

      const command = new Deno.Command("deno", {
        args: [
          "test",
          `challenges/${difficulty}/${challenge}/index_test.ts`,
        ],
      });
      const { code, stderr } = await command.output();
      if (code !== 0) {
        console.log(
          `\nType checking of ${difficulty}/${challenge} failed! Here's the output:`,
        );
        console.error(new TextDecoder().decode(stderr).trim());
        typeCheckFailed = true;
        break;
      }

      challengeIndex++;
    }

    if (typeCheckFailed) {
      break;
    }
  }

  if (!typeCheckFailed) {
    console.log(
      `\rProgress: [${
        chalk.green(">".repeat(60))
      }] ${numChallenges}/${numChallenges} 100%`,
    );
    console.log("All challenges type checked successfully!! 🎉");
  }
}

export function getChallenges(difficulties: string[]) {
  const challenges: { [difficulty: string]: string[] } = {};
  for (const difficulty of difficulties) {
    const entries = Deno.readDirSync(`challenges/${difficulty}`);
    for (const entry of entries) {
      if (entry.isDirectory) {
        challenges[difficulty] = challenges[difficulty] || [];
        challenges[difficulty].push(entry.name);
      }
    }
    challenges[difficulty] = challenges[difficulty].toSorted();
  }
  return challenges;
}

function calculateProgress(
  challengeIndex: number,
  numChallenges: number,
) {
  const progress = (challengeIndex / numChallenges) * 100;
  const finished = ">".repeat(Math.floor(progress / 100 * 60));
  const remaining = "-".repeat(60 - finished.length);
  return new TextEncoder().encode(
    `\rProgress: [${chalk.green(finished)}${chalk.red(remaining)}] ${
      challengeIndex + 1
    }/${numChallenges} ${progress.toFixed(1)}%`,
  );
}
