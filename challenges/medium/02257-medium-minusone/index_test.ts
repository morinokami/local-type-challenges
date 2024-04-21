import type { Equal, Expect } from "@/utils.ts";

Deno.test("MinusOne", () => {
  /*
   * Given a number (always positive) as a type. Your type should return the number decreased by one.
   *
   * For example:
   *
   * ```ts
   * type Zero = MinusOne<1> // 0
   * type FiftyFour = MinusOne<55> // 54
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type MinusOne<T extends number> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<MinusOne<1>, 0>>,
    Expect<Equal<MinusOne<55>, 54>>,
    Expect<Equal<MinusOne<3>, 2>>,
    Expect<Equal<MinusOne<100>, 99>>,
    Expect<Equal<MinusOne<1101>, 1100>>,
    Expect<Equal<MinusOne<0>, -1>>,
    Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
  ];
});
