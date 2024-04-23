import type { Equal, Expect } from "@/utils.ts";

Deno.test("Remove Index Signature", () => {
  /*
   * Author: hiroya iizuka (@hiroyaiizuka)
   *
   * Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.
   *
   * For example:
   *
   * ```ts
   * type Foo = {
   *   [key: string]: any
   *   foo(): void
   * }
   *
   * type A = RemoveIndexSignature<Foo> // expected { foo(): void }
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type RemoveIndexSignature<T> = any;

  /* _____________ Test Cases _____________ */
  type Foo = {
    [key: string]: any;
    foo(): void;
  };

  type Bar = {
    [key: number]: any;
    bar(): void;
    0: string;
  };

  const foobar = Symbol("foobar");
  type FooBar = {
    [key: symbol]: any;
    [foobar](): void;
  };

  type Baz = {
    bar(): void;
    baz: string;
  };

  type cases = [
    Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
    Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
    Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
    Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/1367/answer
   * > View solutions on GitHub: https://tsch.js.org/1367/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-remove-index-signature.html
   * > Discover more challenges: https://tsch.js.org
   */
});
