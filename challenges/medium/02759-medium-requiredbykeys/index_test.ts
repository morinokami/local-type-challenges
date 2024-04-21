import type { Equal, Expect } from "@/utils.ts";

Deno.test("RequiredByKeys", () => {
  /*
   * Implement a generic `RequiredByKeys<T,  K>` which takes two type argument `T` and `K`.
   *
   * `K` specify the set of properties of `T` that should set to be required. When `K` is not provided, it should make all properties required just like the normal `Required<T>`.
   *
   * For example
   *
   * ```typescript
   * interface User {
   *   name?: string
   *   age?: number
   *   address?: string
   * }
   *
   * type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
   *
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type RequiredByKeys<T, K> = any;

  /* _____________ Test Cases _____________ */
  interface User {
    name?: string;
    age?: number;
    address?: string;
  }

  interface UserRequiredName {
    name: string;
    age?: number;
    address?: string;
  }

  interface UserRequiredNameAndAge {
    name: string;
    age: number;
    address?: string;
  }

  type cases = [
    Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
    Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
    Expect<Equal<RequiredByKeys<User>, Required<User>>>,
    // @ts-expect-error
    Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>,
  ];
});
