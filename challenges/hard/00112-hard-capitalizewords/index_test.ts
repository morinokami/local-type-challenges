import type { Equal, Expect } from "@/utils.ts";

Deno.test("Capitalize Words", () => {
  /*
   * Author: Anthony Fu (@antfu)
   *
   * Implement `CapitalizeWords<T>` which converts the first letter of **each word of a string** to uppercase and leaves the rest as-is.
   *
   * For example
   *
   * ```ts
   * type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type CapitalizeWords<S extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<CapitalizeWords<"foobar">, "Foobar">>,
    Expect<Equal<CapitalizeWords<"FOOBAR">, "FOOBAR">>,
    Expect<Equal<CapitalizeWords<"foo bar">, "Foo Bar">>,
    Expect<
      Equal<CapitalizeWords<"foo bar hello world">, "Foo Bar Hello World">
    >,
    Expect<
      Equal<CapitalizeWords<"foo bar.hello,world">, "Foo Bar.Hello,World">
    >,
    Expect<
      Equal<
        CapitalizeWords<"aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq">,
        "Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq"
      >
    >,
    Expect<Equal<CapitalizeWords<"">, "">>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/112/answer
   * > View solutions on GitHub: https://tsch.js.org/112/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
