import type { Equal, Expect } from "@/utils.ts";

Deno.test("Greater Than", () => {
  /*
   * Author: ch3cknull (@ch3cknull)
   *
   * In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`
   *
   * Negative numbers do not need to be considered.
   *
   * For example
   *
   * ```ts
   * GreaterThan<2, 1> //should be true
   * GreaterThan<1, 1> //should be false
   * GreaterThan<10, 100> //should be false
   * GreaterThan<111, 11> //should be true
   * ```
   *
   * Good Luck!
   */

  /* _____________ Your Code Here _____________ */
  type GreaterThan<T extends number, U extends number> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<GreaterThan<1, 0>, true>>,
    Expect<Equal<GreaterThan<5, 4>, true>>,
    Expect<Equal<GreaterThan<4, 5>, false>>,
    Expect<Equal<GreaterThan<0, 0>, false>>,
    Expect<Equal<GreaterThan<10, 9>, true>>,
    Expect<Equal<GreaterThan<20, 20>, false>>,
    Expect<Equal<GreaterThan<10, 100>, false>>,
    Expect<Equal<GreaterThan<111, 11>, true>>,
    Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/4425/answer
   * > View solutions on GitHub: https://tsch.js.org/4425/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
