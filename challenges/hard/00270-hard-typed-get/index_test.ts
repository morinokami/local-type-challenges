import type { Equal, Expect } from "@/utils.ts";

Deno.test("Typed Get", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * The [`get` function in lodash](https://lodash.com/docs/4.17.15#get) is a quite convenient helper for accessing nested values in JavaScript. However, when we come to TypeScript, using functions like this will make you lose the type information. With TS 4.1's upcoming [Template Literal Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types) feature, properly typing `get` becomes possible. Can you implement it?
   *
   * For example,
   *
   * ```ts
   * type Data = {
   *   foo: {
   *     bar: {
   *       value: 'foobar',
   *       count: 6,
   *     },
   *     included: true,
   *   },
   *   hello: 'world'
   * }
   *
   * type A = Get<Data, 'hello'> // 'world'
   * type B = Get<Data, 'foo.bar.count'> // 6
   * type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
   * ```
   *
   * Accessing arrays is not required in this challenge.
   */

  /* _____________ Your Code Here _____________ */
  type Get<T, K> = string;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Get<Data, "hello">, "world">>,
    Expect<Equal<Get<Data, "foo.bar.count">, 6>>,
    Expect<Equal<Get<Data, "foo.bar">, { value: "foobar"; count: 6 }>>,
    Expect<Equal<Get<Data, "foo.baz">, false>>,

    Expect<Equal<Get<Data, "no.existed">, never>>,
  ];

  type Data = {
    foo: {
      bar: {
        value: "foobar";
        count: 6;
      };
      included: true;
    };
    "foo.baz": false;
    hello: "world";
  };

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/270/answer
   * > View solutions on GitHub: https://tsch.js.org/270/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
