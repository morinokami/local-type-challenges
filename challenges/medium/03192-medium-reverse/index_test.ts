import type { Equal, Expect } from "@/utils.ts";

Deno.test("Reverse", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement the type version of ```Array.reverse```
   *
   * For example:
   *
   * ```typescript
   * type a = Reverse<['a', 'b']> // ['b', 'a']
   * type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Reverse<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Reverse<[]>, []>>,
    Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
    Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>,
  ];

  type errors = [
    // @ts-expect-error
    Reverse<"string">,
    // @ts-expect-error
    Reverse<{ key: "value" }>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3192/answer
   * > View solutions on GitHub: https://tsch.js.org/3192/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-reverse.html
   * > Discover more challenges: https://tsch.js.org
   */
});
