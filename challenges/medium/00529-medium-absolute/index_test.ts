import type { Equal, Expect } from "@/utils.ts";

Deno.test("Absolute", () => {
  /*
   * Author: Andrey Krasovsky (@bre30kra69cs)
   *
   * Implement the `Absolute` type. A type that take string, number or bigint. The output should be a positive number string
   *
   * For example
   *
   * ```ts
   * type Test = -100
   * type Result = Absolute<Test> // expected to be "100"
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Absolute<T extends number | string | bigint> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Absolute<0>, "0">>,
    Expect<Equal<Absolute<-0>, "0">>,
    Expect<Equal<Absolute<10>, "10">>,
    Expect<Equal<Absolute<-5>, "5">>,
    Expect<Equal<Absolute<"0">, "0">>,
    Expect<Equal<Absolute<"-0">, "0">>,
    Expect<Equal<Absolute<"10">, "10">>,
    Expect<Equal<Absolute<"-5">, "5">>,
    Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
    Expect<Equal<Absolute<9_999n>, "9999">>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/529/answer
   * > View solutions on GitHub: https://tsch.js.org/529/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-absolute.html
   * > Discover more challenges: https://tsch.js.org
   */
});
