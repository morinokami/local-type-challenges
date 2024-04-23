import type { Equal, Expect } from "@/utils.ts";

Deno.test("Mutable", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement the generic ```Mutable<T>``` which makes all properties in ```T``` mutable (not readonly).
   *
   * For example
   *
   * ```typescript
   * interface Todo {
   *   readonly title: string
   *   readonly description: string
   *   readonly completed: boolean
   * }
   *
   * type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
   *
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Mutable<T> = any;

  /* _____________ Test Cases _____________ */
  interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
      author: string;
    };
  }

  type List = [1, 2, 3];

  type cases = [
    Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
    Expect<Equal<Mutable<Readonly<List>>, List>>,
  ];

  type errors = [
    // @ts-expect-error
    Mutable<"string">,
    // @ts-expect-error
    Mutable<0>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/2793/answer
   * > View solutions on GitHub: https://tsch.js.org/2793/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-mutable.html
   * > Discover more challenges: https://tsch.js.org
   */
});
