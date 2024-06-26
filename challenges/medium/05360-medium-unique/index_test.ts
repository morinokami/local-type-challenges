import type { Equal, Expect } from "@/utils.ts";

Deno.test("Unique", () => {
  /*
   * Author: Pineapple (@Pineapple0919)
   *
   * Implement the type version of Lodash.uniq, Unique<T> takes an Array T, returns the Array T without repeated values.
   *
   * ```ts
   * type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
   * type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
   * type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
   * type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
   * type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Unique<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
    Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
    Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>,
    Expect<
      Equal<
        Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>,
        [string, number, 1, "a", 2, "b"]
      >
    >,
    Expect<
      Equal<
        Unique<[unknown, unknown, any, any, never, never]>,
        [unknown, any, never]
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/5360/answer
   * > View solutions on GitHub: https://tsch.js.org/5360/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-unique.html
   * > Discover more challenges: https://tsch.js.org
   */
});
