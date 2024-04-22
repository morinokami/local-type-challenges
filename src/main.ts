import { writeAllSync } from "jsr:@std/io/write-all";

let difficulties = ["warm", "easy", "medium", "hard", "extreme"];

if (import.meta.main) {
  if (Deno.args.length > 0) {
    difficulties = Deno.args.every((arg) => difficulties.includes(arg))
      ? Deno.args
      : difficulties;
  }

  const watcher = Deno.watchFs("challenges");

  console.clear();
  await typeCheck();
  for await (const event of watcher) {
    if (event.kind === "modify") {
      console.clear();
      await typeCheck();
    }
  }
}

async function typeCheck() {
  const challenges = getChallenges();
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
      `\rProgress: [${">".repeat(60)}] ${numChallenges}/${numChallenges} 100%`,
    );
    console.log("All challenges type checked successfully!! 🎉");
  }
}

function getChallenges() {
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
    `\rProgress: [${finished}${remaining}] ${
      challengeIndex + 1
    }/${numChallenges} ${progress.toFixed(1)}%`,
  );
}
