import type { Equal, Expect } from "@/utils.ts";

Deno.test("FirstUniqueCharIndex", () => {
  /*
   * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))
   */

  /* _____________ Your Code Here _____________ */
  type FirstUniqueCharIndex<T extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
    Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
    Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
    Expect<Equal<FirstUniqueCharIndex<"">, -1>>,
    Expect<Equal<FirstUniqueCharIndex<"aaa">, -1>>,
  ];
});
