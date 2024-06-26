import type { Equal, Expect } from "@/utils.ts";

Deno.test("BitwiseXOR", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement ```BitwiseXOR<S1,S2>``` which takes two binary string literal type and returns a binary string that reprents the bitwise XOR of S1 and S2
   *
   * For example:
   *
   * ```typescript
   * BitwiseXOR<'0','1'> // expect '1'
   * BitwiseXOR<'1','1'> // expect '0'
   * BitwiseXOR<'10','1'>  // expect '11'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type BitwiseXOR<S1 extends string, S2 extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<BitwiseXOR<"0", "1">, "1">>,
    Expect<Equal<BitwiseXOR<"1", "1">, "0">>,
    Expect<Equal<BitwiseXOR<"10", "1">, "11">>,
    Expect<Equal<BitwiseXOR<"110", "1">, "111">>,
    Expect<Equal<BitwiseXOR<"101", "11">, "110">>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/30575/answer
   * > View solutions on GitHub: https://tsch.js.org/30575/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
