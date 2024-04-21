import type { Equal, Expect } from "@/utils.ts";

Deno.test("PickByType", () => {
  /*
   * From `T`, pick a set of properties whose type are assignable to `U`.
   *
   * For Example
   *
   * ```typescript
   * type OnlyBoolean = PickByType<{
   *   name: string
   *   count: number
   *   isReadonly: boolean
   *   isEnable: boolean
   * }, boolean> // { isReadonly: boolean; isEnable: boolean; }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type PickByType<T, U> = any;

  /* _____________ Test Cases _____________ */
  interface Model {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  }

  type cases = [
    Expect<
      Equal<
        PickByType<Model, boolean>,
        { isReadonly: boolean; isEnable: boolean }
      >
    >,
    Expect<Equal<PickByType<Model, string>, { name: string }>>,
    Expect<Equal<PickByType<Model, number>, { count: number }>>,
  ];
});
