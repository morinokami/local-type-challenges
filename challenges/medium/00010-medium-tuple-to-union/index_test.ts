import type { Equal, Expect } from "@/utils.ts";

Deno.test("Tuple to Union", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.
   *
   * For example
   *
   * ```ts
   * type Arr = ['1', '2', '3']
   *
   * type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type TupleToUnion<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/10/answer
   * > View solutions on GitHub: https://tsch.js.org/10/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-tuple-to-union.html
   * > Discover more challenges: https://tsch.js.org
   */
});
