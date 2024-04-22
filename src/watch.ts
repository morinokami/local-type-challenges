import { check, getDifficulties } from "@/check.ts";

if (import.meta.main) {
  const difficulties = getDifficulties();
  await check(difficulties);

  const watcher = Deno.watchFs("challenges");
  for await (const event of watcher) {
    if (event.kind === "modify") {
      await check(difficulties);
    }
  }
}
