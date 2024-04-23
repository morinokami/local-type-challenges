import type { Equal, Expect } from "@/utils.ts";

Deno.test("Subsequence", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Given an array of unique elements, return all possible subsequences.
   *
   * A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.
   *
   * For example:
   *
   * ```typescript
   * type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Subsequence<T extends any[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
    Expect<
      Equal<
        Subsequence<[1, 2, 3]>,
        [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/8987/answer
   * > View solutions on GitHub: https://tsch.js.org/8987/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-subsequence.html
   * > Discover more challenges: https://tsch.js.org
   */
});
