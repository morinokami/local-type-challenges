import type { Equal, Expect } from "@/utils.ts";

Deno.test("Square", () => {
  /*
   * Author: null (@aswinsvijay)
   *
   * Given a number, your type should return its square.
   */

  /* _____________ Your Code Here _____________ */
  type Square<N extends number> = number;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Square<0>, 0>>,
    Expect<Equal<Square<1>, 1>>,
    Expect<Equal<Square<3>, 9>>,
    Expect<Equal<Square<20>, 400>>,
    Expect<Equal<Square<100>, 10000>>,

    // Negative numbers
    Expect<Equal<Square<-2>, 4>>,
    Expect<Equal<Square<-5>, 25>>,
    Expect<Equal<Square<-31>, 961>>,
    Expect<Equal<Square<-50>, 2500>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/27133/answer
   * > View solutions on GitHub: https://tsch.js.org/27133/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
