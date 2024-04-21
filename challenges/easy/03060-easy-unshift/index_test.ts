import type { Equal, Expect } from "@/utils.ts";

Deno.test("Unshift", () => {
  /*
   * Implement the type version of ```Array.unshift```
   *
   * For example:
   *
   * ```typescript
   * type Result = Unshift<[1, 2], 0> // [0, 1, 2]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Unshift<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Unshift<[], 1>, [1]>>,
    Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
    Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>,
  ];
});
