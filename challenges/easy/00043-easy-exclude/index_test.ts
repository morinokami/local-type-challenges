import type { Equal, Expect } from "@/utils.ts";

Deno.test("Exclude", () => {
  /*
   * Implement the built-in `Exclude<T, U>`
   *
   * > Exclude from `T` those types that are assignable to `U`
   *
   * For example:
   *
   * ```ts
   * type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type MyExclude<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
    Expect<
      Equal<
        MyExclude<string | number | (() => void), Function>,
        string | number
      >
    >,
  ];
});
