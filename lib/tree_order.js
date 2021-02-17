function inOrderArray(root, arr = []) {
  if (!root) return arr;
  inOrderArray(root.left, arr);
  arr.push(root.val);
  inOrderArray(root.right, arr);
  return arr;
}

function postOrderArray(root, arr = []) {
  if (!root) return arr;
  postOrderArray(root.left, arr);
  postOrderArray(root.right, arr);
  arr.push(root.val);
  return arr;
}


module.exports = {
    inOrderArray,
    postOrderArray
};