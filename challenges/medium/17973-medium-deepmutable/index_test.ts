import type { Equal, Expect } from "@/utils.ts";

Deno.test("DeepMutable", () => {
  /*
   * Author: cutefcc (@cutefcc)
   *
   * Implement a generic DeepMutable<T> which make every parameter of an object - and its sub-objects recursively - mutable.
   *
   * For example
   *
   * ```ts
   * type X = {
   *   readonly a: () => 1
   *   readonly b: string
   *   readonly c: {
   *     readonly d: boolean
   *     readonly e: {
   *       readonly g: {
   *         readonly h: {
   *           readonly i: true
   *           readonly j: "s"
   *         }
   *         readonly k: "hello"
   *       }
   *     }
   *   }
   * }
   *
   * type Expected = {
   *   a: () => 1
   *   b: string
   *   c: {
   *     d: boolean
   *     e: {
   *       g: {
   *         h: {
   *           i: true
   *           j: "s"
   *         }
   *         k: "hello"
   *       }
   *     }
   *   }
   * }
   *
   * type Todo = DeepMutable<X> // should be same as `Expected`
   * ```
   *
   * You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.
   */

  /* _____________ Your Code Here _____________ */
  type DeepMutable = any;

  /* _____________ Test Cases _____________ */
  interface Test1 {
    readonly title: string;
    readonly description: string;
    readonly completed: boolean;
    readonly meta: {
      readonly author: string;
    };
  }
  type Test2 = {
    readonly a: () => 1;
    readonly b: string;
    readonly c: {
      readonly d: boolean;
      readonly e: {
        readonly g: {
          readonly h: {
            readonly i: true;
            readonly j: "s";
          };
          readonly k: "hello";
        };
        readonly l: readonly [
          "hi",
          {
            readonly m: readonly ["hey"];
          },
        ];
      };
    };
  };
  interface DeepMutableTest1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
      author: string;
    };
  }

  type DeepMutableTest2 = {
    a: () => 1;
    b: string;
    c: {
      d: boolean;
      e: {
        g: {
          h: {
            i: true;
            j: "s";
          };
          k: "hello";
        };
        l: [
          "hi",
          {
            m: ["hey"];
          },
        ];
      };
    };
  };

  type cases = [
    Expect<Equal<DeepMutable<Test1>, DeepMutableTest1>>,
    Expect<Equal<DeepMutable<Test2>, DeepMutableTest2>>,
  ];

  type errors = [
    // @ts-expect-error
    DeepMutable<"string">,
    // @ts-expect-error
    DeepMutable<0>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/17973/answer
   * > View solutions on GitHub: https://tsch.js.org/17973/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
