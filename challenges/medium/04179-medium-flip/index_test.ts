import type { Equal, Expect, NotEqual } from "@/utils.ts";

Deno.test("Flip", () => {
  /*
   * Author: Farhan Kathawala (@kathawala)
   *
   * Implement the type of `just-flip-object`. Examples:
   *
   * ```typescript
   * Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
   * Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
   * Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
   * ```
   *
   * No need to support nested objects and values which cannot be object keys such as arrays
   */

  /* _____________ Your Code Here _____________ */
  type Flip<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
    Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
    Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
    Expect<
      Equal<
        { val2: "prop2"; val: "prop" },
        Flip<{ prop: "val"; prop2: "val2" }>
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/4179/answer
   * > View solutions on GitHub: https://tsch.js.org/4179/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-flip.html
   * > Discover more challenges: https://tsch.js.org
   */
});
