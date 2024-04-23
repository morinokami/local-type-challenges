import type { Equal, Expect } from "@/utils.ts";

Deno.test("First of Array", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.
   *
   * For example:
   *
   * ```ts
   * type arr1 = ['a', 'b', 'c']
   * type arr2 = [3, 2, 1]
   *
   * type head1 = First<arr1> // expected to be 'a'
   * type head2 = First<arr2> // expected to be 3
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type First<T extends any[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
  ];

  type errors = [
    // @ts-expect-error
    First<"notArray">,
    // @ts-expect-error
    First<{ 0: "arrayLike" }>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/14/answer
   * > View solutions on GitHub: https://tsch.js.org/14/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-first.html
   * > Discover more challenges: https://tsch.js.org
   */
});
