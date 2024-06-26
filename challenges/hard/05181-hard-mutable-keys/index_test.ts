import type { Equal, Expect } from "@/utils.ts";

Deno.test("Mutable Keys", () => {
  /*
   * Author: Yugang Cao (@Talljack)
   *
   * Implement the advanced util type MutableKeys<T>, which picks all the mutable (not readonly) keys into a union.
   *
   * For example:
   *
   * ```ts
   * type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
   * // expected to be “bar”
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type MutableKeys<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<MutableKeys<{ a: number; readonly b: string }>, "a">>,
    Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, "a">>,
    Expect<
      Equal<
        MutableKeys<
          { a: undefined; readonly b?: undefined; c: string; d: null }
        >,
        "a" | "c" | "d"
      >
    >,
    Expect<Equal<MutableKeys<{}>, never>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/5181/answer
   * > View solutions on GitHub: https://tsch.js.org/5181/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
