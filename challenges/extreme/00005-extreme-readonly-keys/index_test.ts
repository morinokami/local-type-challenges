import type { Equal, Expect } from "@/utils.ts";

Deno.test("Get Readonly Keys", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.
   *
   * For example
   *
   * ```ts
   * interface Todo {
   *   readonly title: string
   *   readonly description: string
   *   completed: boolean
   * }
   *
   * type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type GetReadonlyKeys<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<"title", GetReadonlyKeys<Todo1>>>,
    Expect<Equal<"title" | "description", GetReadonlyKeys<Todo2>>>,
  ];

  interface Todo1 {
    readonly title: string;
    description: string;
    completed: boolean;
  }

  interface Todo2 {
    readonly title: string;
    readonly description: string;
    completed?: boolean;
  }

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/5/answer
   * > View solutions on GitHub: https://tsch.js.org/5/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
