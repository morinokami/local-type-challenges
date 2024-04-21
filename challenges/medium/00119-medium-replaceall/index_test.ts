import type { Equal, Expect } from "@/utils.ts";

Deno.test("ReplaceAll", () => {
  /*
   * Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`
   *
   * For example
   *
   * ```ts
   * type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type ReplaceAll<S extends string, From extends string, To extends string> =
    any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
    Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
    Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
    Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
    Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
    Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
    Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
    Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
    Expect<Equal<ReplaceAll<"", "", "">, "">>,
  ];
});
