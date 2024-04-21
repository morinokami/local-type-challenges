import type { Equal, Expect } from "@/utils.ts";

Deno.test("Tuple to Union", () => {
  /*
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
});
