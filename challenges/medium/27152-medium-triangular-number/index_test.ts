import type { Equal, Expect } from "@/utils.ts";

Deno.test("Triangular number", () => {
  /*
   * Author: null (@aswinsvijay)
   *
   * Given a number N, find the Nth triangular number, i.e. `1 + 2 + 3 + ... + N`
   */

  /* _____________ Your Code Here _____________ */
  type Triangular<N extends number> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Triangular<0>, 0>>,
    Expect<Equal<Triangular<1>, 1>>,
    Expect<Equal<Triangular<3>, 6>>,
    Expect<Equal<Triangular<10>, 55>>,
    Expect<Equal<Triangular<20>, 210>>,
    Expect<Equal<Triangular<55>, 1540>>,
    Expect<Equal<Triangular<100>, 5050>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/27152/answer
   * > View solutions on GitHub: https://tsch.js.org/27152/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
