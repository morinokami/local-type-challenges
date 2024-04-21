import type { Equal, Expect } from "@/utils.ts";

Deno.test("Binary Addition", () => {
  /*
   * Implement `BinaryAdd` to add two binary numbers together. The numbers should not be translated out of binary at any point.
   *
   * Note the two inputs will always have the same length.
   */

  /* _____________ Your Code Here _____________ */
  type Bit = 1 | 0;

  type BinaryAdd<A extends Bit[], B extends Bit[]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<
      Equal<
        BinaryAdd<[1], [1]>,
        [1, 0]
      >
    >,
    Expect<
      Equal<
        BinaryAdd<[0], [1]>,
        [1]
      >
    >,
    Expect<
      Equal<
        BinaryAdd<[1, 1, 0], [0, 0, 1]>,
        [1, 1, 1]
      >
    >,
    Expect<
      Equal<
        BinaryAdd<
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        >,
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
      >
    >,
    Expect<
      Equal<
        BinaryAdd<[1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 1, 1, 0, 0]>,
        [1, 0, 0, 1, 1, 1, 0, 1, 0]
      >
    >,
  ];
});
