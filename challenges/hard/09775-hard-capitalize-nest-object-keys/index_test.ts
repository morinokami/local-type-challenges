import type { Equal, Expect } from "@/utils.ts";

Deno.test("Capitalize Nest Object Keys", () => {
  /*
   * Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.
   */

  /* _____________ Your Code Here _____________ */
  type CapitalizeNestObjectKeys<T> = any;

  /* _____________ Test Cases _____________ */
  type foo = {
    foo: string;
    bars: [{ foo: string }];
  };

  type Foo = {
    Foo: string;
    Bars: [{
      Foo: string;
    }];
  };

  type cases = [
    Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
  ];
});
