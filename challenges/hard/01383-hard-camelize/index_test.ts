import type { Equal, Expect } from "@/utils.ts";

Deno.test("Camelize", () => {
  /*
   * Author: Denis (@denchiklut)
   *
   * Implement Camelize which converts object from snake_case to to camelCase
   *
   * ```ts
   * Camelize<{
   *   some_prop: string,
   *   prop: { another_prop: string },
   *   array: [{ snake_case: string }]
   * }>
   *
   * // expected to be
   * // {
   * //   someProp: string,
   * //   prop: { anotherProp: string },
   * //   array: [{ snakeCase: string }]
   * // }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Camelize<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<
      Equal<
        Camelize<{
          some_prop: string;
          prop: { another_prop: string };
          array: [
            { snake_case: string },
            { another_element: { yet_another_prop: string } },
            { yet_another_element: string },
          ];
        }>,
        {
          someProp: string;
          prop: { anotherProp: string };
          array: [
            { snakeCase: string },
            { anotherElement: { yetAnotherProp: string } },
            { yetAnotherElement: string },
          ];
        }
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/1383/answer
   * > View solutions on GitHub: https://tsch.js.org/1383/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
