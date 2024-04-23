import type { Equal, Expect } from "@/utils.ts";

Deno.test("String to Number", () => {
  /*
   * Author: Pig Fang (@g-plane)
   *
   * Convert a string literal to a number, which behaves like `Number.parseInt`.
   */

  /* _____________ Your Code Here _____________ */
  type ToNumber<S extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<ToNumber<"0">, 0>>,
    Expect<Equal<ToNumber<"5">, 5>>,
    Expect<Equal<ToNumber<"12">, 12>>,
    Expect<Equal<ToNumber<"27">, 27>>,
    Expect<Equal<ToNumber<"18@7_$%">, never>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/300/answer
   * > View solutions on GitHub: https://tsch.js.org/300/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
