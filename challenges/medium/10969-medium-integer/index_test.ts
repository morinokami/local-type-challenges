import type { Equal, Expect } from "@/utils.ts";

Deno.test("Integer", () => {
  /*
   * Author: HuaBing (@hbcraft)
   *
   * Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.
   */

  /* _____________ Your Code Here _____________ */
  type Integer<T> = any;

  /* _____________ Test Cases _____________ */
  let x = 1;
  let y = 1 as const;

  type cases1 = [
    Expect<Equal<Integer<1>, 1>>,
    Expect<Equal<Integer<1.1>, never>>,
    Expect<Equal<Integer<1.0>, 1>>,
    Expect<Equal<Integer<1.000000000>, 1>>,
    Expect<Equal<Integer<0.5>, never>>,
    Expect<Equal<Integer<28.00>, 28>>,
    Expect<Equal<Integer<28.101>, never>>,
    Expect<Equal<Integer<typeof x>, never>>,
    Expect<Equal<Integer<typeof y>, 1>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/10969/answer
   * > View solutions on GitHub: https://tsch.js.org/10969/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
