import type { Equal, Expect } from "@/utils.ts";

Deno.test("OptionalUndefined", () => {
  /*
   * Author: Jesus The Hun (@JesusTheHun)
   *
   * Implement the util type `OptionalUndefined<T, Props>` that turns all the properties of `T` that can be `undefined`, into optional properties. In addition, a second -optional- generic `Props` can be passed to restrict the properties that can be altered.
   *
   * ```ts
   * OptionalUndefined<{ value: string | undefined, description: string }>
   * // { value?: string | undefined; description: string }
   *
   * OptionalUndefined<{ value: string | undefined, description: string | undefined, author: string | undefined }, 'description' | 'author'>
   * // { value: string | undefined; description?: string | undefined, author?: string | undefined }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type OptionalUndefined<T, Props> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<
      Equal<
        OptionalUndefined<{ value: string | undefined }, "value">,
        { value?: string | undefined }
      >
    >,
    Expect<
      Equal<
        OptionalUndefined<{ value: string; desc: string }, "value">,
        { value: string; desc: string }
      >
    >,
    Expect<
      Equal<
        OptionalUndefined<{ value: string | undefined; desc: string }, "value">,
        { value?: string; desc: string }
      >
    >,
    Expect<
      Equal<
        OptionalUndefined<
          { value: string | undefined; desc: string | undefined },
          "value"
        >,
        { value?: string | undefined; desc: string | undefined }
      >
    >,
    Expect<
      Equal<
        OptionalUndefined<
          { value: string | undefined; desc: string },
          "value" | "desc"
        >,
        { value?: string; desc: string }
      >
    >,
    Expect<
      Equal<
        OptionalUndefined<
          { value: string | undefined; desc: string | undefined }
        >,
        { value?: string; desc?: string }
      >
    >,
    Expect<
      Equal<OptionalUndefined<{ value?: string }, "value">, { value?: string }>
    >,
    Expect<Equal<OptionalUndefined<{ value?: string }>, { value?: string }>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/28143/answer
   * > View solutions on GitHub: https://tsch.js.org/28143/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
