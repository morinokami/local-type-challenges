import type { Equal, Expect } from "@/utils.ts";

Deno.test("BEM style string", () => {
  /*
   * Author: Songhn (@songhn233)
   *
   * The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.
   *
   * For example, the block component would be represented as `btn`, element that depends upon the block would be represented as `btn__price`, modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.
   *
   * Implement `BEM<B, E, M>` which generate string union from these three parameters. Where `B` is a string literal, `E` and `M` are string arrays (can be empty).
   */

  /* _____________ Your Code Here _____________ */
  type BEM<B extends string, E extends string[], M extends string[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
    Expect<
      Equal<
        BEM<"btn", ["price"], ["warning", "success"]>,
        "btn__price--warning" | "btn__price--success"
      >
    >,
    Expect<
      Equal<
        BEM<"btn", [], ["small", "medium", "large"]>,
        "btn--small" | "btn--medium" | "btn--large"
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3326/answer
   * > View solutions on GitHub: https://tsch.js.org/3326/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-bem-style-string.html
   * > Discover more challenges: https://tsch.js.org
   */
});
