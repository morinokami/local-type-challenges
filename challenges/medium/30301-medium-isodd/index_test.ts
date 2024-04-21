import type { Equal, Expect } from "@/utils.ts";

Deno.test("IsOdd", () => {
  /*
   * return true is a number is odd
   */

  /* _____________ Your Code Here _____________ */
  type IsOdd<T extends number> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<IsOdd<5>, true>>,
    Expect<Equal<IsOdd<2023>, true>>,
    Expect<Equal<IsOdd<1453>, true>>,
    Expect<Equal<IsOdd<1926>, false>>,
    Expect<Equal<IsOdd<2.3>, false>>,
    Expect<Equal<IsOdd<3e23>, false>>,
    Expect<Equal<IsOdd<number>, false>>,
  ];
});
