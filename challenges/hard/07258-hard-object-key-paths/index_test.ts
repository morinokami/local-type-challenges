import type { Equal, Expect, ExpectExtends } from "@/utils.ts";

Deno.test("Object Key Paths", () => {
  /*
   * Author: CattChen (@ChenKS12138)
   *
   * Get all possible paths that could be called by [_.get](https://lodash.com/docs/4.17.15#get) (a lodash function) to get the value of an object
   *
   * ```typescript
   * type T1 = ObjectKeyPaths<{ name: string; age: number }>; // expected to be 'name' | 'age'
   * type T2 = ObjectKeyPaths<{
   *   refCount: number;
   *   person: { name: string; age: number };
   * }>; // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'
   * type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type ObjectKeyPaths<T extends object> = any;

  /* _____________ Test Cases _____________ */
  const ref = {
    count: 1,
    person: {
      name: "cattchen",
      age: 22,
      books: ["book1", "book2"],
      pets: [
        {
          type: "cat",
        },
      ],
    },
  };

  type cases = [
    Expect<
      Equal<ObjectKeyPaths<{ name: string; age: number }>, "name" | "age">
    >,
    Expect<
      Equal<
        ObjectKeyPaths<{
          refCount: number;
          person: { name: string; age: number };
        }>,
        "refCount" | "person" | "person.name" | "person.age"
      >
    >,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "count">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.name">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.age">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.0">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.1">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books[0]">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.books.[0]">>,
    Expect<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets.0.type">>,
    Expect<Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "notExist">, false>>,
    Expect<
      Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.notExist">, false>
    >,
    Expect<
      Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, "person.name.">, false>
    >,
    Expect<
      Equal<ExpectExtends<ObjectKeyPaths<typeof ref>, ".person.name">, false>
    >,
    Expect<
      Equal<
        ExpectExtends<ObjectKeyPaths<typeof ref>, "person.pets.[0]type">,
        false
      >
    >,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/7258/answer
   * > View solutions on GitHub: https://tsch.js.org/7258/solutions

   * > Discover more challenges: https://tsch.js.org
   */
});
