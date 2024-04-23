import type { Equal, Expect } from "@/utils.ts";

Deno.test("IsTuple", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.
   *
   * For example:
   *
   * ```typescript
   * type case1 = IsTuple<[number]> // true
   * type case2 = IsTuple<readonly [number]> // true
   * type case3 = IsTuple<number[]> // false
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type IsTuple<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<IsTuple<[]>, true>>,
    Expect<Equal<IsTuple<[number]>, true>>,
    Expect<Equal<IsTuple<readonly [1]>, true>>,
    Expect<Equal<IsTuple<{ length: 1 }>, false>>,
    Expect<Equal<IsTuple<number[]>, false>>,
    Expect<Equal<IsTuple<never>, false>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/4484/answer
   * > View solutions on GitHub: https://tsch.js.org/4484/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
