import type { Equal, Expect } from "@/utils.ts";

Deno.test("Length of Tuple", () => {
  /*
   * Author: sinoon (@sinoon)
   *
   * For given a tuple, you need create a generic `Length`, pick the length of the tuple
   *
   * For example:
   *
   * ```ts
   * type tesla = ['tesla', 'model 3', 'model X', 'model Y']
   * type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
   *
   * type teslaLength = Length<tesla>  // expected 4
   * type spaceXLength = Length<spaceX> // expected 5
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Length<T> = any;

  /* _____________ Test Cases _____________ */
  const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
  const spaceX = [
    "FALCON 9",
    "FALCON HEAVY",
    "DRAGON",
    "STARSHIP",
    "HUMAN SPACEFLIGHT",
  ] as const;

  type cases = [
    Expect<Equal<Length<typeof tesla>, 4>>,
    Expect<Equal<Length<typeof spaceX>, 5>>,
    // @ts-expect-error
    Length<5>,
    // @ts-expect-error
    Length<"hello world">,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/18/answer
   * > View solutions on GitHub: https://tsch.js.org/18/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/easy-tuple-length.html
   * > Discover more challenges: https://tsch.js.org
   */
});
