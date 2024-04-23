import type { Equal, Expect } from "@/utils.ts";

Deno.test("Parameters", () => {
  /*
   * Author: midorizemi (@midorizemi)
   *
   * Implement the built-in Parameters<T> generic without using it.
   *
   * For example:
   *
   * ```ts
   * const foo = (arg1: string, arg2: number): void => {}
   *
   * type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type MyParameters<T extends (...args: any[]) => any> = any;

  /* _____________ Test Cases _____________ */
  function foo(arg1: string, arg2: number): void {}
  function bar(arg1: boolean, arg2: { a: "A" }): void {}
  function baz(): void {}

  type cases = [
    Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
    Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
    Expect<Equal<MyParameters<typeof baz>, []>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3312/answer
   * > View solutions on GitHub: https://tsch.js.org/3312/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-parameters.html
   * > Discover more challenges: https://tsch.js.org
   */
});
