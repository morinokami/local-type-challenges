import type { Equal, Expect } from "@/utils.ts";

Deno.test("ValidDate", () => {
  /*
   * Author: ch3cknull (@ch3cknull)
   *
   * Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.
   *
   * **Leap year is not considered**
   *
   * Good Luck!
   *
   * ```ts
   * ValidDate<'0102'> // true
   * ValidDate<'0131'> // true
   * ValidDate<'1231'> // true
   * ValidDate<'0229'> // false
   * ValidDate<'0100'> // false
   * ValidDate<'0132'> // false
   * ValidDate<'1301'> // false
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type ValidDate<T extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<ValidDate<"0102">, true>>,
    Expect<Equal<ValidDate<"0131">, true>>,
    Expect<Equal<ValidDate<"1231">, true>>,
    Expect<Equal<ValidDate<"0229">, false>>,
    Expect<Equal<ValidDate<"0100">, false>>,
    Expect<Equal<ValidDate<"0132">, false>>,
    Expect<Equal<ValidDate<"1301">, false>>,
    Expect<Equal<ValidDate<"0123">, true>>,
    Expect<Equal<ValidDate<"01234">, false>>,
    Expect<Equal<ValidDate<"">, false>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/9155/answer
   * > View solutions on GitHub: https://tsch.js.org/9155/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
