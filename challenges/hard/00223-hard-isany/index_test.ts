import type { Equal, Expect } from "@/utils.ts";

Deno.test("IsAny", () => {
  /*
   * Author: Pavel Glushkov (@pashutk)
   *
   * Sometimes it's useful to detect if you have a value with `any` type. This is especially helpful while working with third-party Typescript modules, which can export `any` values in the module API. It's also good to know about `any` when you're suppressing implicitAny checks.
   *
   * So, let's write a utility type `IsAny<T>`, which takes input type `T`. If `T` is `any`, return `true`, otherwise, return `false`.
   */

  /* _____________ Your Code Here _____________ */
  type IsAny<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<IsAny<any>, true>>,

    Expect<Equal<IsAny<undefined>, false>>,
    Expect<Equal<IsAny<unknown>, false>>,
    Expect<Equal<IsAny<never>, false>>,
    Expect<Equal<IsAny<string>, false>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/223/answer
   * > View solutions on GitHub: https://tsch.js.org/223/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
