import type { Equal, Expect } from "@/utils.ts";

Deno.test("Length of String", () => {
  /*
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
});
