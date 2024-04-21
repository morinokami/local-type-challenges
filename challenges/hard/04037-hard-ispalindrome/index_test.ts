import type { Equal, Expect } from "@/utils.ts";

Deno.test("IsPalindrome", () => {
  /*
   * Implement type ```IsPalindrome<T>``` to check whether  a string or number is palindrome.
   *
   * For example:
   *
   * ```typescript
   * IsPalindrome<'abc'> // false
   * IsPalindrome<121> // true
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type IsPalindrome<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<IsPalindrome<"abc">, false>>,
    Expect<Equal<IsPalindrome<"b">, true>>,
    Expect<Equal<IsPalindrome<"abca">, false>>,
    Expect<Equal<IsPalindrome<"abba">, true>>,
    Expect<Equal<IsPalindrome<"abcba">, true>>,
    Expect<Equal<IsPalindrome<121>, true>>,
    Expect<Equal<IsPalindrome<2332>, true>>,
    Expect<Equal<IsPalindrome<19260817>, false>>,
  ];
});
