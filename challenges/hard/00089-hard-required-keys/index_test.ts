import type { Equal, Expect } from "@/utils.ts";

Deno.test("Required Keys", () => {
  /*
   * Author: yituan (@yi-tuan)
   *
   * Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.
   *
   * For example
   *
   * ```ts
   * type Result = RequiredKeys<{ foo: number; bar?: string }>;
   * // expected to be “foo”
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type RequiredKeys<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<RequiredKeys<{ a: number; b?: string }>, "a">>,
    Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, "a">>,
    Expect<
      Equal<
        RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
        "a" | "c" | "d"
      >
    >,
    Expect<Equal<RequiredKeys<{}>, never>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/89/answer
   * > View solutions on GitHub: https://tsch.js.org/89/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
