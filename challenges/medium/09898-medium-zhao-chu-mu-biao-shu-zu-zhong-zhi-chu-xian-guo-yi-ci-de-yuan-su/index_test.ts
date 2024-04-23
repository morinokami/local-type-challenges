import type { Equal, Expect } from "@/utils.ts";

Deno.test("Appear only once", () => {
  /*
   * Author: X.Q. Chen (@brenner8023)
   *
   * Find the elements in the target array that appear only once. For example：input: `[1,2,2,3,3,4,5,6,6,6]`，ouput: `[1,4,5]`.
   */

  /* _____________ Your Code Here _____________ */
  type FindEles<T extends any[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
    Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
    Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/9898/answer
   * > View solutions on GitHub: https://tsch.js.org/9898/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
