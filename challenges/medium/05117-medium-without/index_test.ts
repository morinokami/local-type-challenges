import type { Equal, Expect } from "@/utils.ts";

Deno.test("Without", () => {
  /*
   * Author: Pineapple (@Pineapple0919)
   *
   * Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.
   *
   * ```ts
   * type Res = Without<[1, 2], 1>; // expected to be [2]
   * type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
   * type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Without<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Without<[1, 2], 1>, [2]>>,
    Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
    Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/5117/answer
   * > View solutions on GitHub: https://tsch.js.org/5117/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-without.html
   * > Discover more challenges: https://tsch.js.org
   */
});
