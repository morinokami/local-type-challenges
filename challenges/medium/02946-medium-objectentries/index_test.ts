import type { Equal, Expect } from "@/utils.ts";

Deno.test("ObjectEntries", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement the type version of ```Object.entries```
   *
   * For example
   *
   * ```typescript
   * interface Model {
   *   name: string;
   *   age: number;
   *   locations: string[] | null;
   * }
   * type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type ObjectEntries<T> = any;

  /* _____________ Test Cases _____________ */
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type ModelEntries = ["name", string] | ["age", number] | [
    "locations",
    string[] | null,
  ];

  type cases = [
    Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
    Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
    Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
    Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
    Expect<
      Equal<
        ObjectEntries<{ key: string | undefined }>,
        ["key", string | undefined]
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/2946/answer
   * > View solutions on GitHub: https://tsch.js.org/2946/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-objectentries.html
   * > Discover more challenges: https://tsch.js.org
   */
});
