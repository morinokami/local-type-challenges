import type { Equal, Expect } from "@/utils.ts";

Deno.test("String to Union", () => {
  /*
   * Author: Andrey Krasovsky (@bre30kra69cs)
   *
   * Implement the String to Union type. Type take string argument. The output should be a union of input letters
   *
   * For example
   *
   * ```ts
   * type Test = "123"
   * type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type StringToUnion<T extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<StringToUnion<"">, never>>,
    Expect<Equal<StringToUnion<"t">, "t">>,
    Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
    Expect<
      Equal<
        StringToUnion<"coronavirus">,
        "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/531/answer
   * > View solutions on GitHub: https://tsch.js.org/531/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-string-to-union.html
   * > Discover more challenges: https://tsch.js.org
   */
});
