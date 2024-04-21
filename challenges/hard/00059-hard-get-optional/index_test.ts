import type { Equal, Expect } from "@/utils.ts";

Deno.test("Get Optional", () => {
  /*
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
});
