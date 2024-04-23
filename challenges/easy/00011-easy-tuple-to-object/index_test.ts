import type { Equal, Expect } from "@/utils.ts";

Deno.test("Tuple to Object", () => {
  /*
   * Author: sinoon (@sinoon)
   *
   * Given an array, transform it into an object type and the key/value must be in the provided array.
   *
   * For example:
   *
   * ```ts
   * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
   *
   * type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type TupleToObject<T extends readonly any[]> = any;

  /* _____________ Test Cases _____________ */
  const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
  const tupleNumber = [1, 2, 3, 4] as const;
  const sym1 = Symbol(1);
  const sym2 = Symbol(2);
  const tupleSymbol = [sym1, sym2] as const;
  const tupleMix = [1, "2", 3, "4", sym1] as const;

  type cases = [
    Expect<
      Equal<
        TupleToObject<typeof tuple>,
        {
          "tesla": "tesla";
          "model 3": "model 3";
          "model X": "model X";
          "model Y": "model Y";
        }
      >
    >,
    Expect<
      Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>
    >,
    Expect<
      Equal<
        TupleToObject<typeof tupleSymbol>,
        { [sym1]: typeof sym1; [sym2]: typeof sym2 }
      >
    >,
    Expect<
      Equal<
        TupleToObject<typeof tupleMix>,
        { 1: 1; "2": "2"; 3: 3; "4": "4"; [sym1]: typeof sym1 }
      >
    >,
  ];

  // @ts-expect-error
  type error = TupleToObject<[[1, 2], {}]>;

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/11/answer
   * > View solutions on GitHub: https://tsch.js.org/11/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-tuple-to-object.html
   * > Discover more challenges: https://tsch.js.org
   */
});
