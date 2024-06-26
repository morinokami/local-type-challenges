import type { Equal, Expect } from "@/utils.ts";

Deno.test("Combination key type", () => {
  /*
   * Author: Nauxscript (@Nauxscript)
   *
   * 1. Combine multiple modifier keys, but the same modifier key combination cannot appear.
   * 2. In the `ModifierKeys` provided, the priority of the previous value is higher than the latter value; that is, `cmd ctrl` is OK, but `ctrl cmd` is not allowed.
   */

  /* _____________ Your Code Here _____________ */
  // 实现 Combs
  type Combs<T extends any[]> = any;

  /* _____________ Test Cases _____________ */
  type ModifierKeys = ["cmd", "ctrl", "opt", "fn"];
  type CaseTypeOne =
    | "cmd ctrl"
    | "cmd opt"
    | "cmd fn"
    | "ctrl opt"
    | "ctrl fn"
    | "opt fn";

  type cases = [
    Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/21106/answer
   * > View solutions on GitHub: https://tsch.js.org/21106/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
