import type { Equal, Expect } from "@/utils.ts";

Deno.test("Get Optional", () => {
  /*
   * Author: Zheeeng (@zheeeng)
   *
   * Implement the advanced util type `GetOptional<T>`, which remains all the optional fields
   *
   * For example
   *
   * ```ts
   * type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type GetOptional<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
    Expect<
      Equal<
        GetOptional<{ foo: undefined; bar?: undefined }>,
        { bar?: undefined }
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/59/answer
   * > View solutions on GitHub: https://tsch.js.org/59/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
