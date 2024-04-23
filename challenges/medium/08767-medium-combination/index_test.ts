import type { Equal, Expect } from "@/utils.ts";

Deno.test("Combination", () => {
  /*
   * Author: Homyee King (@HomyeeKing)
   *
   * Given an array of strings, do Permutation & Combination.
   * It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)
   *
   * ```ts
   * // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
   * type Keys = Combination<['foo', 'bar', 'baz']>
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Combination<T extends string[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<
      Equal<
        Combination<["foo", "bar", "baz"]>,
        | "foo"
        | "bar"
        | "baz"
        | "foo bar"
        | "foo bar baz"
        | "foo baz"
        | "foo baz bar"
        | "bar foo"
        | "bar foo baz"
        | "bar baz"
        | "bar baz foo"
        | "baz foo"
        | "baz foo bar"
        | "baz bar"
        | "baz bar foo"
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/8767/answer
   * > View solutions on GitHub: https://tsch.js.org/8767/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
