import type { Equal, Expect } from "@/utils.ts";

Deno.test("printf", () => {
  /*
   * Implement `Format<T extends string>` generic.
   *
   * For example,
   *
   * ```ts
   * type FormatCase1 = Format<"%sabc"> // FormatCase1 : string => string
   * type FormatCase2 = Format<"%s%dabc"> // FormatCase2 : string => number => string
   * type FormatCase3 = Format<"sdabc"> // FormatCase3 :  string
   * type FormatCase4 = Format<"sd%abc"> // FormatCase4 :  string
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Format<T extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Format<"abc">, string>>,
    Expect<Equal<Format<"a%sbc">, (s1: string) => string>>,
    Expect<Equal<Format<"a%dbc">, (d1: number) => string>>,
    Expect<Equal<Format<"a%%dbc">, string>>,
    Expect<Equal<Format<"a%%%dbc">, (d1: number) => string>>,
    Expect<Equal<Format<"a%dbc%s">, (d1: number) => (s1: string) => string>>,
  ];
});
