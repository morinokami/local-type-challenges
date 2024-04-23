import type { Equal, Expect } from "@/utils.ts";

Deno.test("Drop Char", () => {
  /*
   * Author: CaptainOfPhB (@CaptainOfPhB)
   *
   * Drop a specified char from a string.
   *
   * For example:
   *
   * ```ts
   * type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type DropChar<S, C> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    // @ts-expect-error
    Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
    Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
    Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
    Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
    Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
    Expect<
      Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">
    >,
    Expect<
      Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/2070/answer
   * > View solutions on GitHub: https://tsch.js.org/2070/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-drop-char.html
   * > Discover more challenges: https://tsch.js.org
   */
});
