import type { Equal, Expect } from "@/utils.ts";

Deno.test("FindAll", () => {
  /*
   * Author: tunamagur0 (@tunamagur0)
   *
   * Given a pattern string P and a text string T, implement the type `FindAll<T, P>` that returns an Array that contains all indices (0-indexed) from T where P matches.
   */

  /* _____________ Your Code Here _____________ */
  type FindAll<T extends string, P extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<
      Equal<FindAll<"Collection of TypeScript type challenges", "Type">, [14]>
    >,
    Expect<
      Equal<FindAll<"Collection of TypeScript type challenges", "pe">, [16, 27]>
    >,
    Expect<Equal<FindAll<"Collection of TypeScript type challenges", "">, []>>,
    Expect<Equal<FindAll<"", "Type">, []>>,
    Expect<Equal<FindAll<"", "">, []>>,
    Expect<Equal<FindAll<"AAAA", "A">, [0, 1, 2, 3]>>,
    Expect<Equal<FindAll<"AAAA", "AA">, [0, 1, 2]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/21104/answer
   * > View solutions on GitHub: https://tsch.js.org/21104/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
