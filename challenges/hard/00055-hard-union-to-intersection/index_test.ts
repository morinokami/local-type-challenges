import type { Equal, Expect } from "@/utils.ts";

Deno.test("Union to Intersection", () => {
  /*
   * Author: Zheeeng (@zheeeng)
   *
   * Implement the advanced util type `UnionToIntersection<U>`
   *
   * For example
   *
   * ```ts
   * type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type UnionToIntersection<U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
    Expect<
      Equal<
        UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
        (() => "foo") & ((i: 42) => true)
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/55/answer
   * > View solutions on GitHub: https://tsch.js.org/55/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
