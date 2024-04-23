import type { Equal, Expect } from "@/utils.ts";

Deno.test("Trim Right", () => {
  /*
   * Author: Yugang Cao (@Talljack)
   *
   * Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.
   *
   * For example:
   *
   * ```ts
   * type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type TrimRight<S extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<TrimRight<"str">, "str">>,
    Expect<Equal<TrimRight<"str ">, "str">>,
    Expect<Equal<TrimRight<"str     ">, "str">>,
    Expect<Equal<TrimRight<"     str     ">, "     str">>,
    Expect<Equal<TrimRight<"   foo bar  \n\t ">, "   foo bar">>,
    Expect<Equal<TrimRight<"">, "">>,
    Expect<Equal<TrimRight<"\n\t ">, "">>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/4803/answer
   * > View solutions on GitHub: https://tsch.js.org/4803/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-trim-right.html
   * > Discover more challenges: https://tsch.js.org
   */
});
