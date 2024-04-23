import type { Equal, Expect } from "@/utils.ts";

Deno.test("Length of String", () => {
  /*
   * Author: Pig Fang (@g-plane)
   *
   * Compute the length of a string literal, which behaves like `String#length`.
   */

  /* _____________ Your Code Here _____________ */
  type LengthOfString<S extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<LengthOfString<"">, 0>>,
    Expect<Equal<LengthOfString<"kumiko">, 6>>,
    Expect<Equal<LengthOfString<"reina">, 5>>,
    Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/298/answer
   * > View solutions on GitHub: https://tsch.js.org/298/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-length-of-string.html
   * > Discover more challenges: https://tsch.js.org
   */
});
