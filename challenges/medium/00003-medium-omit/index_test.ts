import type { Equal, Expect } from "@/utils.ts";

Deno.test("Omit", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Implement the built-in `Omit<T, K>` generic without using it.
   *
   * Constructs a type by picking all properties from `T` and then removing `K`
   *
   * For example
   *
   * ```ts
   * interface Todo {
   *   title: string
   *   description: string
   *   completed: boolean
   * }
   *
   * type TodoPreview = MyOmit<Todo, 'description' | 'title'>
   *
   * const todo: TodoPreview = {
   *   completed: false,
   * }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type MyOmit<T, K> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
    Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>,
  ];

  // @ts-expect-error
  type error = MyOmit<Todo, "description" | "invalid">;

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  interface Expected1 {
    title: string;
    completed: boolean;
  }

  interface Expected2 {
    title: string;
  }

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3/answer
   * > View solutions on GitHub: https://tsch.js.org/3/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-omit.html
   * > Discover more challenges: https://tsch.js.org
   */
});
