import type { Equal, Expect } from "@/utils.ts";

Deno.test("Construct Tuple", () => {
  /*
   * Author: Lo (@LoTwT)
   *
   * Construct a tuple with a given length.
   *
   * For example
   *
   * ```ts
   * type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type ConstructTuple<L extends number> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<ConstructTuple<0>, []>>,
    Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
    Expect<Equal<ConstructTuple<999>["length"], 999>>,
    // @ts-expect-error
    Expect<Equal<ConstructTuple<1000>["length"], 1000>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/7544/answer
   * > View solutions on GitHub: https://tsch.js.org/7544/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
