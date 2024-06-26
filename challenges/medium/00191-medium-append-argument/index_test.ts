import type { Equal, Expect } from "@/utils.ts";

Deno.test("Append Argument", () => {
  /*
   * Author: Maciej Sikora (@maciejsikora)
   *
   * For given function type `Fn`, and any type `A` (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take `Fn` as the first argument, `A` as the second, and will produce function type `G` which will be the same as `Fn` but with appended argument `A` as a last one.
   *
   * For example,
   *
   * ```typescript
   * type Fn = (a: number, b: string) => number
   *
   * type Result = AppendArgument<Fn, boolean>
   * // expected be (a: number, b: string, x: boolean) => number
   * ```
   *
   * > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c) by [@maciejsikora](https://github.com/maciejsikora)
   */

  /* _____________ Your Code Here _____________ */
  type AppendArgument<Fn, A> = any;

  /* _____________ Test Cases _____________ */
  type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
  type Result1 = (a: number, b: string, x: boolean) => number;

  type Case2 = AppendArgument<() => void, undefined>;
  type Result2 = (x: undefined) => void;

  type cases = [
    Expect<Equal<Case1, Result1>>,
    Expect<Equal<Case2, Result2>>,
    // @ts-expect-error
    AppendArgument<unknown, undefined>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/191/answer
   * > View solutions on GitHub: https://tsch.js.org/191/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-append-argument.html
   * > Discover more challenges: https://tsch.js.org
   */
});
