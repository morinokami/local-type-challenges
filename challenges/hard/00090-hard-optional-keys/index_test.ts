import type { Equal, Expect } from "@/utils.ts";

Deno.test("Optional Keys", () => {
  /*
   * Implement the advanced util type `OptionalKeys<T>`, which picks all the optional keys into a union.
   */

  /* _____________ Your Code Here _____________ */
  type OptionalKeys<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<OptionalKeys<{ a: number; b?: string }>, "b">>,
    Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, "b">>,
    Expect<
      Equal<
        OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>,
        "b" | "c" | "d"
      >
    >,
    Expect<Equal<OptionalKeys<{}>, never>>,
  ];
});
