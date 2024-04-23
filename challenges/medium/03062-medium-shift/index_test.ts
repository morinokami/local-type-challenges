import type { Equal, Expect } from "@/utils.ts";

Deno.test("Shift", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement the type version of ```Array.shift```
   *
   * For example
   *
   * ```typescript
   * type Result = Shift<[3, 2, 1]> // [2, 1]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Shift<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    // @ts-expect-error
    Shift<unknown>,
    Expect<Equal<Shift<[]>, []>>,
    Expect<Equal<Shift<[1]>, []>>,
    Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
    Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3062/answer
   * > View solutions on GitHub: https://tsch.js.org/3062/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-shift.html
   * > Discover more challenges: https://tsch.js.org
   */
});
