import type { Equal, Expect } from "@/utils.ts";

Deno.test("KebabCase", () => {
  /*
   * Replace the `camelCase` or `PascalCase` string with `kebab-case`.
   *
   * `FooBarBaz` -> `foo-bar-baz`
   *
   * For example
   *
   * ```ts
   * type FooBarBaz = KebabCase<"FooBarBaz">
   * const foobarbaz: FooBarBaz = "foo-bar-baz"
   *
   * type DoNothing = KebabCase<"do-nothing">
   * const doNothing: DoNothing = "do-nothing"
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type KebabCase<S> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
    Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
    Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
    Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
    Expect<Equal<KebabCase<"-">, "-">>,
    Expect<Equal<KebabCase<"">, "">>,
    Expect<Equal<KebabCase<"😎">, "😎">>,
  ];
});
