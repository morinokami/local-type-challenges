import type { Equal, Expect } from "@/utils.ts";

Deno.test("CheckRepeatedChars", () => {
  /*
   * Author: Hong (@RThong)
   *
   * Implement type ```CheckRepeatedChars<S>``` which will return whether type ```S``` contains duplicated chars?
   *
   * For example:
   *
   * ```ts
   * type CheckRepeatedChars<'abc'>   // false
   * type CheckRepeatedChars<'aba'>   // true
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type CheckRepeatedChars<T extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<CheckRepeatedChars<"abc">, false>>,
    Expect<Equal<CheckRepeatedChars<"abb">, true>>,
    Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
    Expect<Equal<CheckRepeatedChars<"">, false>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/9142/answer
   * > View solutions on GitHub: https://tsch.js.org/9142/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
