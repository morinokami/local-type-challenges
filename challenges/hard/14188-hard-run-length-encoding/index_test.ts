import type { Equal, Expect } from "@/utils.ts";

Deno.test("Run-length encoding", () => {
  /*
   * Author: Hen Hedymdeith (@alfaproxima)
   *
   * Given a `string` sequence of a letters f.e. `AAABCCXXXXXXY`. Return run-length encoded string `3AB2C6XY`.
   * Also make a decoder for that string.
   */

  /* _____________ Your Code Here _____________ */
  namespace RLE {
    export type Encode<S extends string> = any;
    export type Decode<S extends string> = any;
  }

  /* _____________ Test Cases _____________ */
  type cases = [
    // Raw string -> encoded string
    Expect<Equal<RLE.Encode<"AAABCCXXXXXXY">, "3AB2C6XY">>,

    // Encoded string -> decoded string
    Expect<Equal<RLE.Decode<"3AB2C6XY">, "AAABCCXXXXXXY">>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/14188/answer
   * > View solutions on GitHub: https://tsch.js.org/14188/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
