import type { Equal, Expect, NotAny } from "@/utils.ts";

Deno.test("Hello World", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Hello, World!
   *
   * In Type Challenges, we use the type system itself to do the assertion.
   *
   * For this challenge, you will need to change the following code to make the tests pass (no type check errors).
   *
   * ```ts
   * // expected to be string
   * type HelloWorld = any
   * ```
   *
   * ```ts
   * // you should make this work
   * type test = Expect<Equal<HelloWorld, string>>
   * ```
   *
   * Click the `Take the Challenge` button to start coding! Happy Hacking!
   */

  /* _____________ Your Code Here _____________ */
  type HelloWorld = any; // expected to be a string

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<NotAny<HelloWorld>>,
    Expect<Equal<HelloWorld, string>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/13/answer
   * > View solutions on GitHub: https://tsch.js.org/13/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/warm-hello-world.html
   * > Discover more challenges: https://tsch.js.org
   */
});
