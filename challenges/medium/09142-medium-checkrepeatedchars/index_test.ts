import type { Equal, Expect } from "@/utils.ts";

Deno.test("CheckRepeatedChars", () => {
  /*
   * Implement type ```CheckRepeatedChars<S>``` which will return whether type ```S``` contains duplicated chars?
   *
   * For example:
   *
   * ```ts
   * type CheckRepeatedChars<'abc'>   // false
   * type CheckRepeatedChars<'aba'>   // true
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type CheckRepeatedChars<T extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<CheckRepeatedChars<"abc">, false>>,
    Expect<Equal<CheckRepeatedChars<"abb">, true>>,
    Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
    Expect<Equal<CheckRepeatedChars<"">, false>>,
  ];
});
