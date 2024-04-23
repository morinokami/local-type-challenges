import type { Equal, Expect } from "@/utils.ts";

Deno.test("Trim", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.
   *
   * For example
   *
   * ```ts
   * type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Trim<S extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Trim<"str">, "str">>,
    Expect<Equal<Trim<" str">, "str">>,
    Expect<Equal<Trim<"     str">, "str">>,
    Expect<Equal<Trim<"str   ">, "str">>,
    Expect<Equal<Trim<"     str     ">, "str">>,
    Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
    Expect<Equal<Trim<"">, "">>,
    Expect<Equal<Trim<" \n\t ">, "">>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/108/answer
   * > View solutions on GitHub: https://tsch.js.org/108/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-trim.html
   * > Discover more challenges: https://tsch.js.org
   */
});
