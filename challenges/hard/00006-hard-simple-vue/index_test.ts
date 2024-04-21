import type { Equal, Expect } from "@/utils.ts";

Deno.test("Simple Vue", () => {
  /*
   * Implement a simpiled version of a Vue-like typing support.
   *
   * By providing a function name `SimpleVue` (similar to `Vue.extend` or `defineComponent`), it should properly infer the `this` type inside computed and methods.
   *
   * In this challenge, we assume that SimpleVue take an Object with `data`, `computed` and `methods` fields as it's only argument,
   *
   * - `data` is a simple function that returns an object that exposes the context `this`, but you won't be accessible to other computed values or methods.
   *
   * - `computed` is an Object of functions that take the context as `this`, doing some calculation and returns the result. The computed results should be exposed to the context as the plain return values instead of functions.
   *
   * - `methods` is an Object of functions that take the context as `this` as well. Methods can access the fields exposed by `data`, `computed` as well as other `methods`. The different between `computed` is that `methods` exposed as functions as-is.
   *
   * The type of `SimpleVue`'s return value can be arbitrary.
   *
   * ```ts
   * const instance = SimpleVue({
   *   data() {
   *     return {
   *       firstname: 'Type',
   *       lastname: 'Challenges',
   *       amount: 10,
   *     }
   *   },
   *   computed: {
   *     fullname() {
   *       return this.firstname + ' ' + this.lastname
   *     }
   *   },
   *   methods: {
   *     hi() {
   *       alert(this.fullname.toLowerCase())
   *     }
   *   }
   * })
   * ```
   */

  /* _____________ Your Code Here _____________ */
  declare function SimpleVue(options: any): any;

  /* _____________ Test Cases _____________ */
  SimpleVue({
    data() {
      // @ts-expect-error
      this.firstname;
      // @ts-expect-error
      this.getRandom();
      // @ts-expect-error
      this.data();

      return {
        firstname: "Type",
        lastname: "Challenges",
        amount: 10,
      };
    },
    computed: {
      fullname() {
        return `${this.firstname} ${this.lastname}`;
      },
    },
    methods: {
      getRandom() {
        return Math.random();
      },
      hi() {
        alert(this.amount);
        alert(this.fullname.toLowerCase());
        alert(this.getRandom());
      },
      test() {
        const fullname = this.fullname;
        const cases: [Expect<Equal<typeof fullname, string>>] = [] as any;
      },
    },
  });
});
