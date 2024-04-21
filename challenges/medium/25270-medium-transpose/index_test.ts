import type { Equal, Expect } from "@/utils.ts";

Deno.test("Transpose", () => {
  /*
   * The transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by A<sup>T</sup>.
   *
   * ```ts
   * type Matrix = Transpose <[[1]]>; // expected to be [[1]]
   * type Matrix1 = Transpose <[[1, 2], [3, 4]]>; // expected to be [[1, 3], [2, 4]]
   * type Matrix2 = Transpose <[[1, 2, 3], [4, 5, 6]]>; // expected to be [[1, 4], [2, 5], [3, 6]]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Transpose<M extends number[][]> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<Equal<Transpose<[]>, []>>,
    Expect<Equal<Transpose<[[1]]>, [[1]]>>,
    Expect<Equal<Transpose<[[1, 2]]>, [[1], [2]]>>,
    Expect<Equal<Transpose<[[1, 2], [3, 4]]>, [[1, 3], [2, 4]]>>,
    Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6]]>, [[1, 4], [2, 5], [3, 6]]>>,
    Expect<Equal<Transpose<[[1, 4], [2, 5], [3, 6]]>, [[1, 2, 3], [4, 5, 6]]>>,
    Expect<
      Equal<
        Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>,
        [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
      >
    >,
  ];
});
