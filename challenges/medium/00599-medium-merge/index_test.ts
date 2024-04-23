import type { Equal, Expect } from "@/utils.ts";

Deno.test("Merge", () => {
  /*
   * Author: ZYSzys (@ZYSzys)
   *
   * Merge two types into a new type. Keys of the second type overrides keys of the first type.
   *
   * For example
   *
   * ```ts
   * type foo = {
   *   name: string
   *   age: string
   * }
   * type coo = {
   *   age: number
   *   sex: string
   * }
   *
   * type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Merge<F, S> = any;

  /* _____________ Test Cases _____________ */
  type Foo = {
    a: number;
    b: string;
  };
  type Bar = {
    b: number;
    c: boolean;
  };

  type cases = [
    Expect<
      Equal<Merge<Foo, Bar>, {
        a: number;
        b: number;
        c: boolean;
      }>
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/599/answer
   * > View solutions on GitHub: https://tsch.js.org/599/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-merge.html
   * > Discover more challenges: https://tsch.js.org
   */
});
