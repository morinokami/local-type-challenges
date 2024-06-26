import type { Equal, Expect } from "@/utils.ts";

Deno.test("If", () => {
  /*
   * Author: Pavel Glushkov (@pashutk)
   *
   * Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.
   *
   * For example:
   *
   * ```ts
   * type A = If<true, 'a', 'b'>  // expected to be 'a'
   * type B = If<false, 'a', 'b'> // expected to be 'b'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type If<C, T, F> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<If<true, "a", "b">, "a">>,
    Expect<Equal<If<false, "a", 2>, 2>>,
  ];

  // @ts-expect-error
  type error = If<null, "a", "b">;

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/268/answer
   * > View solutions on GitHub: https://tsch.js.org/268/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-if.html
   * > Discover more challenges: https://tsch.js.org
   */
});
