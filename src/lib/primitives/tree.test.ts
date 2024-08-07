import { expect, test } from "vitest";
import { convertTree } from "./tree";

test("convertTree", () => {
  const converted = convertTree([
    {
      id: "root",
      payload: null,
    },
    {
      id: "child-1",
      parentId: "root",
      payload: null,
    },
    {
      id: "child-2",
      parentId: "child-1",
      payload: null,
    },
  ]);

  expect(converted).toEqual({
    node: { id: "root", payload: null },
    children: [
      {
        node: { id: "child-1", parentId: "root", payload: null },
        children: [
          {
            node: { id: "child-2", parentId: "child-1", payload: null },
            children: [],
          },
        ],
      },
    ],
  } satisfies ReturnType<typeof convertTree>);
});
