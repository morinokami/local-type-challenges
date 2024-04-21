import type { Equal, Expect } from "@/utils.ts";

Deno.test("LastIndexOf", () => {
  /*
   * Implement the type version of ```Array.lastIndexOf```, ```LastIndexOf<T, U>```  takes an Array ```T```, any ```U``` and returns the index of the last ```U``` in Array ```T```
   *
   * For example:
   *
   * ```typescript
   * type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
   * type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type LastIndexOf<T, U> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
    Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
    Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
    Expect<Equal<LastIndexOf<[string, 2, number, "a", number, 1], number>, 4>>,
    Expect<Equal<LastIndexOf<[string, any, 1, number, "a", any, 1], any>, 5>>,
  ];
});
