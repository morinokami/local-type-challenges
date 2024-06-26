import type { ExpectExtends, ExpectFalse, ExpectTrue } from "@/utils.ts";

Deno.test("Tree path array", () => {
  /*
   * Author: Neil Richter (@noook)
   *
   * Create a type `Path` that represents validates a possible path of a tree under the form of an array.
   *
   * Related challenges:
   * - [Object key path](https://github.com/type-challenges/type-challenges/blob/main/questions/07258-hard-object-key-paths/README.md)
   *
   * ```ts
   * declare const example: {
   *     foo: {
   *         bar: {
   *             a: string;
   *         };
   *         baz: {
   *             b: number
   *             c: number
   *         }
   *     };
   * }
   *
   * // Possible solutions:
   * // []
   * // ['foo']
   * // ['foo', 'bar']
   * // ['foo', 'bar', 'a']
   * // ['foo', 'baz']
   * // ['foo', 'baz', 'b']
   * // ['foo', 'baz', 'c']
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type Path<T> = any;

  /* _____________ Test Cases _____________ */
  declare const example: {
    foo: {
      bar: {
        a: string;
      };
      baz: {
        b: number;
        c: number;
      };
    };
  };

  type cases = [
    ExpectTrue<ExpectExtends<Path<typeof example["foo"]["bar"]>, ["a"]>>,
    ExpectTrue<
      ExpectExtends<Path<typeof example["foo"]["baz"]>, ["b"] | ["c"]>
    >,
    ExpectTrue<
      ExpectExtends<
        Path<typeof example["foo"]>,
        ["bar"] | ["baz"] | ["bar", "a"] | ["baz", "b"] | ["baz", "c"]
      >
    >,
    ExpectFalse<ExpectExtends<Path<typeof example["foo"]["bar"]>, ["z"]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/15260/answer
   * > View solutions on GitHub: https://tsch.js.org/15260/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
