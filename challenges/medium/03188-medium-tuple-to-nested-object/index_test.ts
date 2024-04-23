import type { Equal, Expect } from "@/utils.ts";

Deno.test("Tuple to Nested Object", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Given a tuple type ```T``` that only contains string type, and a type ```U```, build an object recursively.
   *
   * ```typescript
   * type a = TupleToNestedObject<['a'], string> // {a: string}
   * type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
   * type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type TupleToNestedObject<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
    Expect<
      Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>
    >,
    Expect<
      Equal<
        TupleToNestedObject<["a", "b", "c"], boolean>,
        { a: { b: { c: boolean } } }
      >
    >,
    Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3188/answer
   * > View solutions on GitHub: https://tsch.js.org/3188/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-tuple-to-nested-object.html
   * > Discover more challenges: https://tsch.js.org
   */
});
