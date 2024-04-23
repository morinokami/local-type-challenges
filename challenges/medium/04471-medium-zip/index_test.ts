import type { Equal, Expect } from "@/utils.ts";

Deno.test("Zip", () => {
  /*
   * Author: キリサメ qianxi (@qianxi0410)
   *
   * In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
   * ```ts
   * type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Zip<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Zip<[], []>, []>>,
    Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
    Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
    Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
    Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/4471/answer
   * > View solutions on GitHub: https://tsch.js.org/4471/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-zip.html
   * > Discover more challenges: https://tsch.js.org
   */
});
