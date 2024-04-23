import type { Equal, Expect } from "@/utils.ts";

Deno.test("Parse URL Params", () => {
  /*
   * Author: Anderson. J (@andersonjoseph)
   *
   * You're required to implement a type-level parser to parse URL params string into an Union.
   *
   * ```ts
   * ParseUrlParams<':id'> // id
   * ParseUrlParams<'posts/:id'> // id
   * ParseUrlParams<'posts/:id/:user'> // id | user
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type ParseUrlParams<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<ParseUrlParams<"">, never>>,
    Expect<Equal<ParseUrlParams<":id">, "id">>,
    Expect<Equal<ParseUrlParams<"posts/:id">, "id">>,
    Expect<Equal<ParseUrlParams<"posts/:id/">, "id">>,
    Expect<Equal<ParseUrlParams<"posts/:id/:user">, "id" | "user">>,
    Expect<Equal<ParseUrlParams<"posts/:id/:user/like">, "id" | "user">>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/9616/answer
   * > View solutions on GitHub: https://tsch.js.org/9616/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
