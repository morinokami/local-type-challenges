import type { Equal, Expect } from "@/utils.ts";

Deno.test("Awaited", () => {
  /*
   * If we have a type which is a wrapped type like Promise, how we can get the type which is inside the wrapped type?
   *
   * For example: if we have `Promise<ExampleType>` how to get ExampleType?
   *
   * ```ts
   * type ExampleType = Promise<string>
   *
   * type Result = MyAwaited<ExampleType> // string
   * ```
   *
   * > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)
   */

  /* _____________ Your Code Here _____________ */
  type MyAwaited<T> = any;

  /* _____________ Test Cases _____________ */
  type X = Promise<string>;
  type Y = Promise<{ field: number }>;
  type Z = Promise<Promise<string | number>>;
  type Z1 = Promise<Promise<Promise<string | boolean>>>;
  type T = { then: (onfulfilled: (arg: number) => any) => any };

  type cases = [
    Expect<Equal<MyAwaited<X>, string>>,
    Expect<Equal<MyAwaited<Y>, { field: number }>>,
    Expect<Equal<MyAwaited<Z>, string | number>>,
    Expect<Equal<MyAwaited<Z1>, string | boolean>>,
    Expect<Equal<MyAwaited<T>, number>>,
  ];

  // @ts-expect-error
  type error = MyAwaited<number>;
});
