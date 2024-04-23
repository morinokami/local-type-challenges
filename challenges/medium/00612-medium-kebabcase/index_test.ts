import type { Equal, Expect } from "@/utils.ts";

Deno.test("KebabCase", () => {
  /*
   * Author: Johnson Chu (@johnsoncodehk)
   *
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

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/612/answer
   * > View solutions on GitHub: https://tsch.js.org/612/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-kebabcase.html
   * > Discover more challenges: https://tsch.js.org
   */
});
