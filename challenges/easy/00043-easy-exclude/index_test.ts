import type { Equal, Expect } from "@/utils.ts";

Deno.test("Exclude", () => {
  /*
   * Author: Zheeeng (@zheeeng)
   *
   * Implement the built-in `Exclude<T, U>`
   *
   * > Exclude from `T` those types that are assignable to `U`
   *
   * For example:
   *
   * ```ts
   * type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type MyExclude<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
    Expect<
      Equal<
        MyExclude<string | number | (() => void), Function>,
        string | number
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/43/answer
   * > View solutions on GitHub: https://tsch.js.org/43/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-exclude.html
   * > Discover more challenges: https://tsch.js.org
   */
});
