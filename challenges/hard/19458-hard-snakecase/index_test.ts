import type { Equal, Expect } from "@/utils.ts";

Deno.test("SnakeCase", () => {
  /*
   * Author: Gabriel Vergnaud (@gvergnaud)
   *
   * Create a `SnakeCase<T>` generic that turns a string formatted in **camelCase** into a string formatted in **snake_case**.
   *
   * A few examples:
   *
   * ```ts
   * type res1 = SnakeCase<"hello">; // => "hello"
   * type res2 = SnakeCase<"userName">; // => "user_name"
   * type res3 = SnakeCase<"getElementById">; // => "get_element_by_id"
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type SnakeCase<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<SnakeCase<"hello">, "hello">>,
    Expect<Equal<SnakeCase<"userName">, "user_name">>,
    Expect<Equal<SnakeCase<"getElementById">, "get_element_by_id">>,
    Expect<
      Equal<
        SnakeCase<"getElementById" | "getElementByClassNames">,
        "get_element_by_id" | "get_element_by_class_names"
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/19458/answer
   * > View solutions on GitHub: https://tsch.js.org/19458/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
