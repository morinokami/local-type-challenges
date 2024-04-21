import type { Equal, Expect } from "@/utils.ts";

Deno.test("Get Required", () => {
  /*
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
});
