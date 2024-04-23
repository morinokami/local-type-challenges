import type { Equal, Expect } from "@/utils.ts";

Deno.test("CheckRepeatedTuple", () => {
  /*
   * Author: bowen (@jiaowoxiaobala)
   *
   * Implement type `CheckRepeatedChars<T>` which will return whether type `T` contains duplicated member
   *
   * For example:
   *
   * ```ts
   * type CheckRepeatedTuple<[1, 2, 3]>   // false
   * type CheckRepeatedTuple<[1, 2, 1]>   // true
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type CheckRepeatedTuple<T extends unknown[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
    Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
    Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
    Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
    Expect<Equal<CheckRepeatedTuple<[]>, false>>,
    Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/27958/answer
   * > View solutions on GitHub: https://tsch.js.org/27958/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-checkrepeatedtuple.html
   * > Discover more challenges: https://tsch.js.org
   */
});
