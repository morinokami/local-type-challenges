import type { Equal, Expect } from "@/utils.ts";

Deno.test("Fibonacci Sequence", () => {
  /*
   * Author: windliang (@wind-liang)
   *
   * Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).
   *
   * The sequence starts:
   * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
   *
   * For example
   * ```ts
   * type Result1 = Fibonacci<3> // 2
   * type Result2 = Fibonacci<8> // 21
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Fibonacci<T extends number> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Fibonacci<1>, 1>>,
    Expect<Equal<Fibonacci<2>, 1>>,
    Expect<Equal<Fibonacci<3>, 2>>,
    Expect<Equal<Fibonacci<8>, 21>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/4182/answer
   * > View solutions on GitHub: https://tsch.js.org/4182/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
