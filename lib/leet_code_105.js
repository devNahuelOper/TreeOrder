// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require("./tree_node.js");

function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let rootIdx = inorder.indexOf(rootVal);

  let leftInOrder = inorder.slice(0, rootIdx);
  let rightInOrder = inorder.slice(rootIdx + 1);

  let leftPreOrder = preorder.filter((n) => leftInOrder.includes(n));
  let rightPreOrder = preorder.filter((n) => rightInOrder.includes(n));

  let leftTree = buildTree(leftPreOrder, leftInOrder);
  let rightTree = buildTree(rightPreOrder, rightInOrder);

  root.left = leftTree;
  root.right = rightTree;
  return root;
}

// var buildTree = function (preorder, inorder) {
//   if (!preorder.length && !inorder.length) return null;

//   let root = preorder[0];
//   let rootIdx = inorder.indexOf(root);

//   let leftInOrder = inorder.slice(0, rootIdx);
//   let rightInOrder = inorder.slice(rootIdx + 1);

//   let leftPreOrder = preorder.filter((n) => leftInOrder.includes(n));
//   let rightPreOrder = preorder.filter((n) => rightInOrder.includes(n));

//   let leftTree = buildTree(leftPreOrder, leftInOrder);
//   let rightTree = buildTree(rightPreOrder, rightInOrder);

//   return new TreeNode(root, leftTree, rightTree);
// };

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
