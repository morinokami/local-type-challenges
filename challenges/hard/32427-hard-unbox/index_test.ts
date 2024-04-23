import type { Equal, Expect } from "@/utils.ts";

Deno.test("Unbox", () => {
  /*
   * Author: Julian Coy (@eXamadeus)
   *
   * How can we build a type that "unboxes" arrays, functions, promises, and tuples?
   *
   * Example:
   *
   * ```typescript
   * Unbox<string> // string
   * Unbox<()=>number> // number
   * Unbox<boolean[]> // boolean
   * Unbox<Promise<boolean>> // boolean
   * ```
   *
   * Bonus: Can we make it recursive?
   *
   * ```typescript
   * Unbox<() => () => () => () => number> // number
   * ```
   *
   * Double Bonus: Can we control the recursion?
   *
   * ```typescript
   * Unbox<() => () => () => () => number, 3> // () => number
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Unbox<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    // Base cases
    Expect<Equal<Unbox<number>, number>>,
    Expect<Equal<Unbox<() => number>, number>>,
    Expect<Equal<Unbox<() => number | string>, number | string>>,
    Expect<Equal<Unbox<number[]>, number>>,
    Expect<Equal<Unbox<(number | string)[]>, number | string>>,
    Expect<Equal<Unbox<[number]>, number>>,
    Expect<Equal<Unbox<Promise<number>>, number>>,

    // Bonus: Recursion
    Expect<Equal<Unbox<() => Promise<() => Array<Promise<boolean>>>>, boolean>>,

    // Bonus: Recusion levels
    Expect<Equal<Unbox<() => () => () => () => number, 0>, number>>,
    Expect<
      Equal<Unbox<() => () => () => () => number, 1>, () => () => () => number>
    >,
    Expect<Equal<Unbox<() => () => () => () => number, 2>, () => () => number>>,
    Expect<Equal<Unbox<() => () => () => () => number, 3>, () => number>>,
    Expect<Equal<Unbox<() => () => () => () => number, 4>, number>>,
    Expect<Equal<Unbox<() => () => () => () => number, 5>, number>>,
    Expect<Equal<Unbox<number[][][][], 0>, number>>,
    Expect<Equal<Unbox<number[][][][], 1>, number[][][]>>,
    Expect<Equal<Unbox<number[][][][], 2>, number[][]>>,
    Expect<Equal<Unbox<number[][][][], 3>, number[]>>,
    Expect<Equal<Unbox<number[][][][], 4>, number>>,
    Expect<Equal<Unbox<number[][][][], 5>, number>>,
    Expect<Equal<Unbox<[[[[number]]]], 0>, number>>,
    Expect<Equal<Unbox<[[[[number]]]], 1>, [[[number]]]>>,
    Expect<Equal<Unbox<[[[[number]]]], 2>, [[number]]>>,
    Expect<Equal<Unbox<[[[[number]]]], 3>, [number]>>,
    Expect<Equal<Unbox<[[[[number]]]], 4>, number>>,
    Expect<Equal<Unbox<[[[[number]]]], 5>, number>>,
    Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 0>, number>>,
    Expect<
      Equal<
        Unbox<Promise<Promise<Promise<number>>>, 1>,
        Promise<Promise<number>>
      >
    >,
    Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 2>, Promise<number>>>,
    Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 3>, number>>,
    Expect<Equal<Unbox<Promise<Promise<Promise<number>>>, 4>, number>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/32427/answer
   * > View solutions on GitHub: https://tsch.js.org/32427/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
