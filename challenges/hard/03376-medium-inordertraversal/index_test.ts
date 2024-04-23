import type { Equal, Expect } from "@/utils.ts";

Deno.test("InorderTraversal", () => {
  /*
   * Author: jiangshan (@jiangshanmeta)
   *
   * Implement the type version of binary tree inorder traversal.
   *
   * For example:
   *
   * ```typescript
   * const tree1 = {
   *   val: 1,
   *   left: null,
   *   right: {
   *     val: 2,
   *     left: {
   *       val: 3,
   *       left: null,
   *       right: null,
   *     },
   *     right: null,
   *   },
   * } as const
   *
   * type A = InorderTraversal<typeof tree1> // [1, 3, 2]
   * ```
   */

  /* _____________ Your Code Here _____________ */
  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  type InorderTraversal<T extends TreeNode | null> = any;

  /* _____________ Test Cases _____________ */
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const;

  const tree2 = {
    val: 1,
    left: null,
    right: null,
  } as const;

  const tree3 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  } as const;

  const tree4 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null,
    },
  } as const;

  type cases = [
    Expect<Equal<InorderTraversal<null>, []>>,
    Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
    Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
    Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
    Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/3376/answer
   * > View solutions on GitHub: https://tsch.js.org/3376/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-inordertraversal.html
   * > Discover more challenges: https://tsch.js.org
   */
});
