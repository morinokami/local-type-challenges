import type { Equal, Expect } from "@/utils.ts";

Deno.test("Count Element Number To Object", () => {
  /*
   * Author: 凤之兮原 (@kongmingLatern)
   *
   * With type ``CountElementNumberToObject``, get the number of occurrences of every item from an array and return them in an object. For example:
   *
   * ~~~ts
   * type Simple1 = CountElementNumberToObject<[]> // return {}
   * type Simple2 = CountElementNumberToObject<[1,2,3,4,5]>
   * // return {
   * //   1: 1,
   * //   2: 1,
   * //   3: 1,
   * //   4: 1,
   * //   5: 1
   * // }
   *
   * type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]>
   * // return {
   * //   1: 2,
   * //   2: 2,
   * //   3: 2,
   * //   4: 1,
   * //   5: 1
   * // }
   * ~~~
   */

  /* _____________ Your Code Here _____________ */
  type CountElementNumberToObject<T> = any;

  /* _____________ Test Cases _____________ */
  type cases = [
    Expect<
      Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
        1: 1;
        2: 1;
        3: 1;
        4: 1;
        5: 1;
      }>
    >,
    Expect<
      Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
        1: 2;
        2: 2;
        3: 2;
        4: 1;
        5: 1;
      }>
    >,
    Expect<
      Equal<
        CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>,
        {
          1: 3;
          2: 3;
          3: 2;
          4: 3;
          5: 1;
        }
      >
    >,
    Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
    Expect<
      Equal<CountElementNumberToObject<["1", "2", "0"]>, {
        0: 1;
        1: 1;
        2: 1;
      }>
    >,
    Expect<
      Equal<CountElementNumberToObject<["a", "b", ["c", ["d"]]]>, {
        "a": 1;
        "b": 1;
        "c": 1;
        "d": 1;
      }>
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/9989/answer
   * > View solutions on GitHub: https://tsch.js.org/9989/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
