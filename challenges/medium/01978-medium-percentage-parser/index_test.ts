import type { Equal, Expect } from "@/utils.ts";

Deno.test("Percentage Parser", () => {
  /*
   * Author: SSShuai1999 (@SSShuai1999)
   *
   * Implement PercentageParser<T extends string>.
   * According to the `/^(\+|\-)?(\d*)?(\%)?$/` regularity to match T and get three matches.
   *
   * The structure should be: [`plus or minus`, `number`, `unit`]
   * If it is not captured, the default is an empty string.
   *
   * For example:
   *
   * ```ts
   * type PString1 = ""
   * type PString2 = "+85%"
   * type PString3 = "-85%"
   * type PString4 = "85%"
   * type PString5 = "85"
   *
   * type R1 = PercentageParser<PString1> // expected ['', '', '']
   * type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
   * type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
   * type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
   * type R5 = PercentageParser<PString5> // expected ["", "85", ""]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type PercentageParser<A extends string> = any;

  /* _____________ Test Cases _____________ */
  type Case0 = ["", "", ""];
  type Case1 = ["+", "", ""];
  type Case2 = ["+", "1", ""];
  type Case3 = ["+", "100", ""];
  type Case4 = ["+", "100", "%"];
  type Case5 = ["", "100", "%"];
  type Case6 = ["-", "100", "%"];
  type Case7 = ["-", "100", ""];
  type Case8 = ["-", "1", ""];
  type Case9 = ["", "", "%"];
  type Case10 = ["", "1", ""];
  type Case11 = ["", "100", ""];

  type cases = [
    Expect<Equal<PercentageParser<"">, Case0>>,
    Expect<Equal<PercentageParser<"+">, Case1>>,
    Expect<Equal<PercentageParser<"+1">, Case2>>,
    Expect<Equal<PercentageParser<"+100">, Case3>>,
    Expect<Equal<PercentageParser<"+100%">, Case4>>,
    Expect<Equal<PercentageParser<"100%">, Case5>>,
    Expect<Equal<PercentageParser<"-100%">, Case6>>,
    Expect<Equal<PercentageParser<"-100">, Case7>>,
    Expect<Equal<PercentageParser<"-1">, Case8>>,
    Expect<Equal<PercentageParser<"%">, Case9>>,
    Expect<Equal<PercentageParser<"1">, Case10>>,
    Expect<Equal<PercentageParser<"100">, Case11>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/1978/answer
   * > View solutions on GitHub: https://tsch.js.org/1978/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-percentage-parser.html
   * > Discover more challenges: https://tsch.js.org
   */
});
