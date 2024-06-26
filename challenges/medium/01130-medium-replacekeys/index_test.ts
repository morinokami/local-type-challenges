import type { Equal, Expect } from "@/utils.ts";

Deno.test("ReplaceKeys", () => {
  /*
   * Author: 贱贱 (@lullabyjune)
   *
   * Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing,
   * A type takes three arguments.
   *
   * For example:
   *
   * ```ts
   * type NodeA = {
   *   type: "A"
   *   name: string
   *   flag: number
   * }
   *
   * type NodeB = {
   *   type: "B"
   *   id: number
   *   flag: number
   * }
   *
   * type NodeC = {
   *   type: "C"
   *   name: string
   *   flag: number
   * }
   *
   * type Nodes = NodeA | NodeB | NodeC
   *
   * type ReplacedNodes = ReplaceKeys<
   *   Nodes,
   *   "name" | "flag",
   *   { name: number; flag: string }
   * > // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.
   *
   * type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
   * ```
   */

  /* _____________ Your Code Here _____________ */
  type ReplaceKeys<U, T, Y> = any;

  /* _____________ Test Cases _____________ */
  type NodeA = {
    type: "A";
    name: string;
    flag: number;
  };

  type NodeB = {
    type: "B";
    id: number;
    flag: number;
  };

  type NodeC = {
    type: "C";
    name: string;
    flag: number;
  };

  type ReplacedNodeA = {
    type: "A";
    name: number;
    flag: string;
  };

  type ReplacedNodeB = {
    type: "B";
    id: number;
    flag: string;
  };

  type ReplacedNodeC = {
    type: "C";
    name: number;
    flag: string;
  };

  type NoNameNodeA = {
    type: "A";
    flag: number;
    name: never;
  };

  type NoNameNodeC = {
    type: "C";
    flag: number;
    name: never;
  };

  type Nodes = NodeA | NodeB | NodeC;
  type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;
  type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB;

  type cases = [
    Expect<
      Equal<
        ReplaceKeys<Nodes, "name" | "flag", { name: number; flag: string }>,
        ReplacedNodes
      >
    >,
    Expect<Equal<ReplaceKeys<Nodes, "name", { aa: number }>, NodesNoName>>,
  ];

  /* _____________ Further Steps _____________ */
  /*
   * > Share your solutions: https://tsch.js.org/1130/answer
   * > View solutions on GitHub: https://tsch.js.org/1130/solutions
   * > View solutions on Type Challenges Solutions: https://ghaiklor.github.io/type-challenges-solutions/en/medium-replacekeys.html
   * > Discover more challenges: https://tsch.js.org
   */
});
