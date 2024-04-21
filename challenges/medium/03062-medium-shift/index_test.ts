import type { Equal, Expect } from "@/utils.ts";

Deno.test("Shift", () => {
  /*
   * Implement the type version of ```Array.shift```
   *
   * For example
   *
   * ```typescript
   * type Result = Shift<[3, 2, 1]> // [2, 1]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Shift<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    // @ts-expect-error
    Shift<unknown>,
    Expect<Equal<Shift<[]>, []>>,
    Expect<Equal<Shift<[1]>, []>>,
    Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
    Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
  ];
});
