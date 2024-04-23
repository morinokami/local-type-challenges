import type { Equal, Expect } from "@/utils.ts";

Deno.test("Pick", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Implement the built-in `Pick<T, K>` generic without using it.
   *
   * Constructs a type by picking the set of properties `K` from `T`
   *
   * For example:
   *
   * ```ts
   * interface Todo {
   *   title: string
   *   description: string
   *   completed: boolean
   * }
   *
   * type TodoPreview = MyPick<Todo, 'title' | 'completed'>
   *
   * const todo: TodoPreview = {
   *     title: 'Clean room',
   *     completed: false,
   * }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type MyPick<T, K> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Expected1, MyPick<Todo, "title">>>,
    Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
    // @ts-expect-error
    MyPick<Todo, "title" | "completed" | "invalid">,
  ];

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  interface Expected1 {
    title: string;
  }

  interface Expected2 {
    title: string;
    completed: boolean;
  }

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/4/answer
   * > View solutions on GitHub: https://tsch.js.org/4/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-pick.html
   * > Discover more challenges: https://tsch.js.org
   */
});
