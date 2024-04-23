import type { Equal, Expect } from "@/utils.ts";

Deno.test("Permutation", () => {
  /*
   * Author: Naoto Ikuno (@pandanoir)
   *
   * Implement permutation type that transforms union types into the array that includes permutations of unions.
   *
   * ```typescript
   * type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Permutation<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Permutation<"A">, ["A"]>>,
    Expect<
      Equal<
        Permutation<"A" | "B" | "C">,
        | ["A", "B", "C"]
        | ["A", "C", "B"]
        | ["B", "A", "C"]
        | ["B", "C", "A"]
        | ["C", "A", "B"]
        | ["C", "B", "A"]
      >
    >,
    Expect<
      Equal<
        Permutation<"B" | "A" | "C">,
        | ["A", "B", "C"]
        | ["A", "C", "B"]
        | ["B", "A", "C"]
        | ["B", "C", "A"]
        | ["C", "A", "B"]
        | ["C", "B", "A"]
      >
    >,
    Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
    Expect<Equal<Permutation<never>, []>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/296/answer
   * > View solutions on GitHub: https://tsch.js.org/296/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-permutation.html
   * > Discover more challenges: https://tsch.js.org
   */
});
