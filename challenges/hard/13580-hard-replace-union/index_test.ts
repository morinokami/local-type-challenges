import type { Equal, Expect } from "@/utils.ts";

Deno.test("Replace Union", () => {
  /*
   * Author: Konstantin Barabanov (@crutch12)
   *
   * Given an `union of types` and `array of type pairs` to replace (`[[string, number], [Date, null]]`), return a new union replaced with the `type pairs`.
   */

  /* _____________ Your Code Here _____________ */
  type UnionReplace<T, U extends [any, any][]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    // string -> null
    Expect<
      Equal<UnionReplace<number | string, [[string, null]]>, number | null>
    >,

    // string -> null
    Expect<
      Equal<
        UnionReplace<number | string, [[string, null], [Date, Function]]>,
        number | null
      >
    >,

    // Date -> string; Function -> undefined
    Expect<
      Equal<
        UnionReplace<
          Function | Date | object,
          [[Date, string], [Function, undefined]]
        >,
        undefined | string | object
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/13580/answer
   * > View solutions on GitHub: https://tsch.js.org/13580/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
