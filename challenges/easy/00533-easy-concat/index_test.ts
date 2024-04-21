import type { Equal, Expect } from "@/utils.ts";

Deno.test("Concat", () => {
  /*
   * Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order
   *
   * For example:
   *
   * ```ts
   * type Result = Concat<[1], [2]> // expected to be [1, 2]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Concat<T, U> = any;

  /* _____________ Test Cases _____________ */
  const tuple = [1] as const;

  type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<
      Equal<
        Concat<["1", 2, "3"], [false, boolean, "4"]>,
        ["1", 2, "3", false, boolean, "4"]
      >
    >,
  ];

  // @ts-expect-error
  type error = Concat<null, undefined>;
});
