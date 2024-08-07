import { FileTree } from "@/components/file-tree";
import { convertTree } from "@/lib/primitives";

function loadTree() {
  //mocked for now

  return [
    {
      id: "root",
      payload: { name: "Archiv" },
    },
    {
      id: "child-1",
      parentId: "root",
      payload: { name: "Linux ISOs" },
    },
    {
      id: "child-2",
      parentId: "child-1",
      payload: { name: "debian.mp4" },
    },
  ];
}

export default function Page() {
  const tree = loadTree();
  return (
    <div>
      <FileTree tree={convertTree(tree)} />
    </div>
  );
}
