import type { Equal, Expect } from "@/utils.ts";

Deno.test("Trunc", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement the type version of ```Math.trunc```, which takes string or number and returns the integer part of a number by removing any fractional digits.
   *
   * For example:
   *
   * ```typescript
   * type A = Trunc<12.34> // 12
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Trunc = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Trunc<0.1>, "0">>,
    Expect<Equal<Trunc<0.2>, "0">>,
    Expect<Equal<Trunc<1.234>, "1">>,
    Expect<Equal<Trunc<12.345>, "12">>,
    Expect<Equal<Trunc<-5.1>, "-5">>,
    Expect<Equal<Trunc<".3">, "0">>,
    Expect<Equal<Trunc<"1.234">, "1">>,
    Expect<Equal<Trunc<"-10.234">, "-10">>,
    Expect<Equal<Trunc<10>, "10">>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/5140/answer
   * > View solutions on GitHub: https://tsch.js.org/5140/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-trunc.html
   * > Discover more challenges: https://tsch.js.org
   */
});
