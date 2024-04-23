import type { Equal, Expect } from "@/utils.ts";

Deno.test("Unshift", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement the type version of ```Array.unshift```
   *
   * For example:
   *
   * ```typescript
   * type Result = Unshift<[1, 2], 0> // [0, 1, 2]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Unshift<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Unshift<[], 1>, [1]>>,
    Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
    Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3060/answer
   * > View solutions on GitHub: https://tsch.js.org/3060/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-unshift.html
   * > Discover more challenges: https://tsch.js.org
   */
});
