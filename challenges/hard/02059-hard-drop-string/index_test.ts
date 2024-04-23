import type { Equal, Expect } from "@/utils.ts";

Deno.test("Drop String", () => {
  /*
   * Author: CaptainOfPhB (@CaptainOfPhB)
   *
   * Drop the specified chars from a string.
   *
   * For example:
   *
   * ```ts
   * type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type DropString<S, R> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<DropString<"butter fly!", "">, "butter fly!">>,
    Expect<Equal<DropString<"butter fly!", " ">, "butterfly!">>,
    Expect<Equal<DropString<"butter fly!", "but">, "er fly!">>,
    Expect<
      Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">
    >,
    Expect<Equal<DropString<"    butter fly!        ", " ">, "butterfly!">>,
    Expect<Equal<DropString<" b u t t e r f l y ! ", " ">, "butterfly!">>,
    Expect<
      Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">
    >,
    Expect<
      Equal<DropString<" b u t t e r f l y ! ", "tub">, "     e r f l y ! ">
    >,
    Expect<
      Equal<DropString<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">
    >,
    Expect<
      Equal<DropString<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/2059/answer
   * > View solutions on GitHub: https://tsch.js.org/2059/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
