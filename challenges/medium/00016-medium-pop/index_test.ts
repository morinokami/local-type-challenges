import type { Equal, Expect } from "@/utils.ts";

Deno.test("Pop", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * > TypeScript 4.0 is recommended in this challenge
   *
   * Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.
   *
   * For example
   *
   * ```ts
   * type arr1 = ['a', 'b', 'c', 'd']
   * type arr2 = [3, 2, 1]
   *
   * type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
   * type re2 = Pop<arr2> // expected to be [3, 2]
   * ```
   *
   * **Extra**: Similarly, can you implement `Shift`, `Push` and `Unshift` as well?
   */

  /* _____________ Your Code Here _____________ */
  type Pop<T extends any[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
    Expect<Equal<Pop<[]>, []>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/16/answer
   * > View solutions on GitHub: https://tsch.js.org/16/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-pop.html
   * > Discover more challenges: https://tsch.js.org
   */
});
