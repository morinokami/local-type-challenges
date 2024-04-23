import type { Equal, Expect } from "@/utils.ts";

Deno.test("Get Required", () => {
  /*
   * Author: Zheeeng (@zheeeng)
   *
   * Implement the advanced util type `GetRequired<T>`, which remains all the required fields
   *
   * For example
   *
   * ```ts
   * type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type GetRequired<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
    Expect<
      Equal<
        GetRequired<{ foo: undefined; bar?: undefined }>,
        { foo: undefined }
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/57/answer
   * > View solutions on GitHub: https://tsch.js.org/57/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
