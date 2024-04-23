import type { Equal, Expect } from "@/utils.ts";

Deno.test("Readonly", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Implement the built-in `Readonly<T>` generic without using it.
   *
   * Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
   *
   * For example:
   *
   * ```ts
   * interface Todo {
   *   title: string
   *   description: string
   * }
   *
   * const todo: MyReadonly<Todo> = {
   *   title: "Hey",
   *   description: "foobar"
   * }
   *
   * todo.title = "Hello" // Error: cannot reassign a readonly property
   * todo.description = "barFoo" // Error: cannot reassign a readonly property
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type MyReadonly<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
  ];

  interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
      author: string;
    };
  }

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/7/answer
   * > View solutions on GitHub: https://tsch.js.org/7/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-readonly.html
   * > Discover more challenges: https://tsch.js.org
   */
});
