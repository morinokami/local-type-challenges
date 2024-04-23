import type { Equal, Expect } from "@/utils.ts";

Deno.test("Diff", () => {
  /*
   * Author: ZYSzys (@ZYSzys)
   *
   * Get an `Object` that is the difference between `O` & `O1`
   */

  /* _____________ Your Code Here _____________ */
  type Diff<O, O1> = any;

  /* _____________ Test Cases _____________ */
  type Foo = {
    name: string;
    age: string;
  };
  type Bar = {
    name: string;
    age: string;
    gender: number;
  };
  type Coo = {
    name: string;
    gender: number;
  };

  type cases = [
    Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
    Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
    Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
    Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/645/answer
   * > View solutions on GitHub: https://tsch.js.org/645/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-diff.html
   * > Discover more challenges: https://tsch.js.org
   */
});
