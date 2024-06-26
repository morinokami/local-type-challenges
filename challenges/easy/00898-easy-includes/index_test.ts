import type { Equal, Expect } from "@/utils.ts";

Deno.test("Includes", () => {
  /*
   * Author: null (@kynefuk)
   *
   * Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.
   *
   * For example:
   *
   * ```ts
   * type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Includes<T extends readonly any[], U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<
      Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
    >,
    Expect<
      Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
    >,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
    Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
    Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
    Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
    Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
    Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
    Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
    Expect<Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>>,
    Expect<Equal<Includes<[{ readonly a: "A" }], { a: "A" }>, false>>,
    Expect<Equal<Includes<[1], 1 | 2>, false>>,
    Expect<Equal<Includes<[1 | 2], 1>, false>>,
    Expect<Equal<Includes<[null], undefined>, false>>,
    Expect<Equal<Includes<[undefined], null>, false>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/898/answer
   * > View solutions on GitHub: https://tsch.js.org/898/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-includes.html
   * > Discover more challenges: https://tsch.js.org
   */
});
