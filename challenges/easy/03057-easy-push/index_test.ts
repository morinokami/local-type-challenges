import type { Equal, Expect } from "@/utils.ts";

Deno.test("Push", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement the generic version of ```Array.push```
   *
   * For example:
   *
   * ```typescript
   * type Result = Push<[1, 2], '3'> // [1, 2, '3']
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Push<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Push<[], 1>, [1]>>,
    Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
    Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3057/answer
   * > View solutions on GitHub: https://tsch.js.org/3057/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-push.html
   * > Discover more challenges: https://tsch.js.org
   */
});
