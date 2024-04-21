import type { Equal, Expect } from "@/utils.ts";

Deno.test("Maximum", () => {
  /*
   * ### Description
   *
   * Implement the type `Maximum`, which takes an input type `T`, and returns the maximum value in `T`.
   *
   * If `T` is an empty array, it returns `never`. **Negative numbers** are not considered.
   *
   * For example:
   *
   * ```ts
   * Maximum<[]> // never
   * Maximum<[0, 2, 1]> // 2
   * Maximum<[1, 20, 200, 150]> // 200
   * ```
   *
   * ### Advanced
   *
   * Can you implement type `Minimum` inspired by `Maximum`?
   */

  /* _____________ Your Code Here _____________ */
  type Maximum<T extends any[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Maximum<[]>, never>>,
    Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
    Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
  ];
});
