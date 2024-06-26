import type { Equal, Expect } from "@/utils.ts";

Deno.test("IndexOf", () => {
  /*
   * Author: Pineapple (@Pineapple0919)
   *
   * Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.
   *
   * ```ts
   * type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
   * type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
   * type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type IndexOf<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
    Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
    Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
    Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
    Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>,
    Expect<Equal<IndexOf<[string, "a"], "a">, 1>>,
    Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/5153/answer
   * > View solutions on GitHub: https://tsch.js.org/5153/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
