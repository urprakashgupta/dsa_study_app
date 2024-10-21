import React from "react";

const TreeVisualizer = () => {
  // Example: Binary Tree Nodes
  const tree = {
    value: 10,
    left: {
      value: 5,
      left: { value: 3, left: null, right: null },
      right: { value: 7, left: null, right: null },
    },
    right: {
      value: 15,
      left: { value: 13, left: null, right: null },
      right: { value: 18, left: null, right: null },
    },
  };

  const renderTree = (node) => {
    if (!node) return null;
    return (
      <div className="flex flex-col items-center">
        <div className="bg-green-400 text-white rounded-full p-4 mb-4">
          {node.value}
        </div>
        <div className="flex gap-8">
          {node.left && renderTree(node.left)}
          {node.right && renderTree(node.right)}
        </div>
      </div>
    );
  };

  return <div>{renderTree(tree)}</div>;
};

export default TreeVisualizer;
