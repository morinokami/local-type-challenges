import type { Equal, Expect } from "@/utils.ts";

Deno.test("OmitByType", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * From ```T```, pick a set of properties whose type are not assignable to ```U```.
   *
   * For Example
   *
   * ```typescript
   * type OmitBoolean = OmitByType<{
   *   name: string
   *   count: number
   *   isReadonly: boolean
   *   isEnable: boolean
   * }, boolean> // { name: string; count: number }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type OmitByType<T, U> = any;

  /* _____________ Test Cases _____________ */
  interface Model {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  }

  type cases = [
    Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
    Expect<
      Equal<
        OmitByType<Model, string>,
        { count: number; isReadonly: boolean; isEnable: boolean }
      >
    >,
    Expect<
      Equal<
        OmitByType<Model, number>,
        { name: string; isReadonly: boolean; isEnable: boolean }
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/2852/answer
   * > View solutions on GitHub: https://tsch.js.org/2852/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-omitbytype.html
   * > Discover more challenges: https://tsch.js.org
   */
});
