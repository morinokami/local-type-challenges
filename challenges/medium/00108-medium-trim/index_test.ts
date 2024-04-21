import type { Equal, Expect } from "@/utils.ts";

Deno.test("Trim", () => {
  /*
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
});
