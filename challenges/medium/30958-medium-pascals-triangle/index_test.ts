import type { Equal, Expect } from "@/utils.ts";

Deno.test("Pascal's triangle", () => {
  /*
   * Author: Aswin S Vijay (@aswinsvijay)
   *
   * Given a number N, construct the Pascal's triangle with N rows.
   * [Wikipedia](https://en.wikipedia.org/wiki/Pascal%27s_triangle)
   */

  /* _____________ Your Code Here _____________ */
  type Pascal<N extends number> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<
      Equal<
        Pascal<1>,
        [
          [1],
        ]
      >
    >,
    Expect<
      Equal<
        Pascal<3>,
        [
          [1],
          [1, 1],
          [1, 2, 1],
        ]
      >
    >,
    Expect<
      Equal<
        Pascal<5>,
        [
          [1],
          [1, 1],
          [1, 2, 1],
          [1, 3, 3, 1],
          [1, 4, 6, 4, 1],
        ]
      >
    >,
    Expect<
      Equal<
        Pascal<7>,
        [
          [1],
          [1, 1],
          [1, 2, 1],
          [1, 3, 3, 1],
          [1, 4, 6, 4, 1],
          [1, 5, 10, 10, 5, 1],
          [1, 6, 15, 20, 15, 6, 1],
        ]
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/30958/answer
   * > View solutions on GitHub: https://tsch.js.org/30958/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
