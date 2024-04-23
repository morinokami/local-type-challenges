import type { Equal, Expect } from "@/utils.ts";

Deno.test("CountReversePairs", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Given an integer array nums, return the number of reverse pairs in the array.
   *
   * A reverse pair is a pair (i, j) where:
   *
   * * 0 <= i < j < nums.length and
   * * nums[i] > nums[j].
   */

  /* _____________ Your Code Here _____________ */
  type CountReversePairs<T extends number[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<CountReversePairs<[5, 2, 6, 1]>, 4>>,
    Expect<Equal<CountReversePairs<[1, 2, 3, 4]>, 0>>,
    Expect<Equal<CountReversePairs<[-1, -1]>, 0>>,
    Expect<Equal<CountReversePairs<[-1]>, 0>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/31447/answer
   * > View solutions on GitHub: https://tsch.js.org/31447/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
