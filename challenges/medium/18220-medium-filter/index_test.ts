import type { Equal, Expect } from "@/utils.ts";

Deno.test("Filter", () => {
  /*
   * Author: Muhun Kim (@x86chi)
   *
   * Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type `Predicate` and returns an Array include the elements of `Predicate`.
   */

  /* _____________ Your Code Here _____________ */
  type Filter<T extends any[], P> = [];

  /* _____________ Test Cases _____________ */
  type Falsy = false | 0 | "" | null | undefined;

  type cases = [
    Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
    Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
    Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/18220/answer
   * > View solutions on GitHub: https://tsch.js.org/18220/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
