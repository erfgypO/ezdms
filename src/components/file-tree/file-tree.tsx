"use client";
import { TreeNode } from "@/lib/primitives";

import { AlertCircle, File, Folder } from "lucide-react";
import { PropsWithChildren } from "react";

interface FileSystemInfo {
  name: string;
}

interface FileTreeProps {
  tree: TreeNode<FileSystemInfo>;
}

function NodeBase({
  children,
  isFolder,
  name,
}: PropsWithChildren<{ isFolder: boolean; name: string }>) {
  return (
    <div className="pb-4">
      <div className={"flex gap-2"}>
        {isFolder ? <Folder /> : <File />}
        {name}
      </div>
      {children}
    </div>
  );
}

export function FileTree({ tree }: FileTreeProps) {
  const hasChildren = tree.children.length > 0;
  return (
    <NodeBase isFolder={hasChildren} name={tree.node.payload.name}>
      {hasChildren && (
        <div className="pl-6 pt-2">
          {tree.children.map((x) => (
            <FileTree key={x.node.id} tree={x} />
          ))}
        </div>
      )}
    </NodeBase>
  );
}
