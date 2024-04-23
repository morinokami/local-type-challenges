import type { Equal, Expect } from "@/utils.ts";

Deno.test("Append to object", () => {
  /*
   * Author: Andrey Krasovsky (@bre30kra69cs)
   *
   * Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.
   *
   * For example
   *
   * ```ts
   * type Test = { id: '1' }
   * type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type AppendToObject<T, U, V> = any;

  /* _____________ Test Cases _____________ */
  type test1 = {
    key: "cat";
    value: "green";
  };

  type testExpect1 = {
    key: "cat";
    value: "green";
    home: boolean;
  };

  type test2 = {
    key: "dog" | undefined;
    value: "white";
    sun: true;
  };

  type testExpect2 = {
    key: "dog" | undefined;
    value: "white";
    sun: true;
    home: 1;
  };

  type test3 = {
    key: "cow";
    value: "yellow";
    sun: false;
  };

  type testExpect3 = {
    key: "cow";
    value: "yellow";
    sun: false;
    moon: false | undefined;
  };

  type cases = [
    Expect<Equal<AppendToObject<test1, "home", boolean>, testExpect1>>,
    Expect<Equal<AppendToObject<test2, "home", 1>, testExpect2>>,
    Expect<
      Equal<AppendToObject<test3, "moon", false | undefined>, testExpect3>
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/527/answer
   * > View solutions on GitHub: https://tsch.js.org/527/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-append-to-object.html
   * > Discover more challenges: https://tsch.js.org
   */
});
