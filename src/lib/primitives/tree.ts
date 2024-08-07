import invariant from "tiny-invariant";

export interface Node<T> {
  id: string;
  parentId?: string;
  payload: T;
}

export interface TreeNode<T> {
  node: Node<T>;
  children: TreeNode<T>[];
}

export function convertTree<T>(nodes: Node<T>[]): TreeNode<T> {
  let rootId: string | null = null;
  const lookup: Record<string, TreeNode<T>> = {};

  for (const node of nodes) {
    invariant(node.id !== node.parentId, "A node can not self-reference");

    const self = (lookup[node.id] = { node, children: [] });

    if (node.parentId == null) {
      invariant(rootId == null, "More than one root node exists");
      rootId = node.id;
    } else {
      const parent = (lookup[node.parentId] = lookup[node.parentId] ?? {
        node: null!,
        children: [],
      });
      parent.children = [...parent.children, self];
    }
  }

  invariant(rootId, "No root node found!");
  return lookup[rootId];
}
