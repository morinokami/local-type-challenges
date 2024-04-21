import type { Equal, Expect } from "@/utils.ts";

Deno.test("CamelCase", () => {
  /*
   * Implement `CamelCase<T>` which converts `snake_case` string to `camelCase`.
   *
   * For example
   *
   * ```ts
   * type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
   * type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type CamelCase<S extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<CamelCase<"foobar">, "foobar">>,
    Expect<Equal<CamelCase<"FOOBAR">, "foobar">>,
    Expect<Equal<CamelCase<"foo_bar">, "fooBar">>,
    Expect<Equal<CamelCase<"foo__bar">, "foo_Bar">>,
    Expect<Equal<CamelCase<"foo_$bar">, "foo_$bar">>,
    Expect<Equal<CamelCase<"foo_bar_">, "fooBar_">>,
    Expect<Equal<CamelCase<"foo_bar__">, "fooBar__">>,
    Expect<Equal<CamelCase<"foo_bar_$">, "fooBar_$">>,
    Expect<Equal<CamelCase<"foo_bar_hello_world">, "fooBarHelloWorld">>,
    Expect<Equal<CamelCase<"HELLO_WORLD_WITH_TYPES">, "helloWorldWithTypes">>,
    Expect<Equal<CamelCase<"-">, "-">>,
    Expect<Equal<CamelCase<"">, "">>,
    Expect<Equal<CamelCase<"😎">, "😎">>,
  ];
});
