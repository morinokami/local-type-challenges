import type { Equal, Expect } from "@/utils.ts";

Deno.test("Intersection", () => {
  /*
   * Author: Pineapple (@Pineapple0919)
   *
   * Implement the type version of Lodash.intersection with a little difference. Intersection<T> takes an Array T containing several arrays or any type element including the union type, and returns a new union containing all intersection elements.
   *
   * ```ts
   * type Res = Intersection<[[1, 2], [2, 3], [2, 2]]>; // expected to be 2
   * type Res1 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; // expected to be 2 | 3
   * type Res2 = Intersection<[[1, 2], [3, 4], [5, 6]]>; // expected to be never
   * type Res3 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; // expected to be 3
   * type Res4 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; // expected to be 2 | 3
   * type Res5 = Intersection<[[1, 2, 3], 2, 3]>; // expected to be never
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Intersection<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Intersection<[[1, 2], [2, 3], [2, 2]]>, 2>>,
    Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>, 2 | 3>>,
    Expect<Equal<Intersection<[[1, 2], [3, 4], [5, 6]]>, never>>,
    Expect<Equal<Intersection<[[1, 2, 3], [2, 3, 4], 3]>, 3>>,
    Expect<Equal<Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>, 2 | 3>>,
    Expect<Equal<Intersection<[[1, 2, 3], 2, 3]>, never>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/5423/answer
   * > View solutions on GitHub: https://tsch.js.org/5423/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
