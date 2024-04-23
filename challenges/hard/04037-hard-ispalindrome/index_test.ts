import type { Equal, Expect } from "@/utils.ts";

Deno.test("IsPalindrome", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
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

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/4037/answer
   * > View solutions on GitHub: https://tsch.js.org/4037/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
