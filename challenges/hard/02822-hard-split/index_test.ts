import type { Equal, Expect } from "@/utils.ts";

Deno.test("Split", () => {
  /*
   * Author: Andrea Simone Costa (@jfet97)
   *
   * The well known `split()` method splits a string into an array of substrings by looking for a separator, and returns the new array. The goal of this challenge is to split a string, by using a separator, but in the type system!
   *
   * For example:
   *
   * ```ts
   * type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Split<S extends string, SEP extends string> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Split<"Hi! How are you?">, ["Hi! How are you?"]>>,
    Expect<Equal<Split<"Hi! How are you?", "z">, ["Hi! How are you?"]>>,
    Expect<
      Equal<Split<"Hi! How are you?", " ">, ["Hi!", "How", "are", "you?"]>
    >,
    Expect<
      Equal<
        Split<"Hi! How are you?", "">,
        [
          "H",
          "i",
          "!",
          " ",
          "H",
          "o",
          "w",
          " ",
          "a",
          "r",
          "e",
          " ",
          "y",
          "o",
          "u",
          "?",
        ]
      >
    >,
    Expect<Equal<Split<"", "">, []>>,
    Expect<
      Equal<Split<"The sine in cosine", "in">, ["The s", "e ", " cos", "e"]>
    >,
    Expect<
      Equal<
        Split<"Never say never, forever and ever.", "ver">,
        ["Ne", " say ne", ", fore", " and e", "."]
      >
    >,
    Expect<Equal<Split<"", "z">, [""]>>,
    Expect<Equal<Split<"">, [""]>>,
    Expect<Equal<Split<string, "whatever">, string[]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/2822/answer
   * > View solutions on GitHub: https://tsch.js.org/2822/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
