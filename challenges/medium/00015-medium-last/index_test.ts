import type { Equal, Expect } from "@/utils.ts";

Deno.test("Last of Array", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * > TypeScript 4.0 is recommended in this challenge
   *
   * Implement a generic `Last<T>` that takes an Array `T` and returns its last element.
   *
   * For example
   *
   * ```ts
   * type arr1 = ['a', 'b', 'c']
   * type arr2 = [3, 2, 1]
   *
   * type tail1 = Last<arr1> // expected to be 'c'
   * type tail2 = Last<arr2> // expected to be 1
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Last<T extends any[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Last<[2]>, 2>>,
    Expect<Equal<Last<[3, 2, 1]>, 1>>,
    Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/15/answer
   * > View solutions on GitHub: https://tsch.js.org/15/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-last.html
   * > Discover more challenges: https://tsch.js.org
   */
});
