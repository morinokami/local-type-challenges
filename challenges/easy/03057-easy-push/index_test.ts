import type { Equal, Expect } from "@/utils.ts";

Deno.test("Push", () => {
  /*
   * Implement the generic version of ```Array.push```
   *
   * For example:
   *
   * ```typescript
   * type Result = Push<[1, 2], '3'> // [1, 2, '3']
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Push<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Push<[], 1>, [1]>>,
    Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
    Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>,
  ];
});
