import type { Equal, Expect } from "@/utils.ts";

Deno.test("Binary to Decimal", () => {
  /*
   * Author: wotsushi (@wotsushi)
   *
   * Implement `BinaryToDecimal<S>` which takes an exact string type `S` consisting 0 and 1 and returns an exact number type corresponding with `S` when `S` is regarded as a binary.
   * You can assume that the length of `S` is equal to or less than 8 and `S` is not empty.
   *
   * ```ts
   * type Res1 = BinaryToDecimal<'10'>; // expected to be 2
   * type Res2 = BinaryToDecimal<'0011'>; // expected to be 3
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type BinaryToDecimal<S extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<BinaryToDecimal<"10">, 2>>,
    Expect<Equal<BinaryToDecimal<"0011">, 3>>,
    Expect<Equal<BinaryToDecimal<"00000000">, 0>>,
    Expect<Equal<BinaryToDecimal<"11111111">, 255>>,
    Expect<Equal<BinaryToDecimal<"10101010">, 170>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/6141/answer
   * > View solutions on GitHub: https://tsch.js.org/6141/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
