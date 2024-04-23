import type { Equal, Expect } from "@/utils.ts";

Deno.test("FlattenDepth", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Recursively flatten array up to depth times.
   *
   * For example:
   *
   * ```typescript
   * type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
   * type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
   * ```
   *
   * If the depth is provided, it's guaranteed to be positive integer.
   */

  /* _____________ Your Code Here _____________ */
  type FlattenDepth = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<FlattenDepth<[]>, []>>,
    Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
    Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
    Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
    Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
    Expect<
      Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3243/answer
   * > View solutions on GitHub: https://tsch.js.org/3243/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
