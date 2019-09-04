const BinarySearchTree = require ('./BST');

let BST = new BinarySearchTree();
// BST.insert(3);
// BST.insert(1);
// BST.insert(4);
// BST.insert(6);
// BST.insert(9);
// BST.insert(2);
// BST.insert(5);
// BST.insert(7);

// BST.insert(3);
// BST.insert(5);
// BST.insert(4);
// BST.insert(6);
// BST.insert(1);
// BST.insert(0);
// BST.insert(2);


// BST.insert('E');
// BST.insert('A');
// BST.insert('S');
// BST.insert('Y');
// BST.insert('Q');
// BST.insert('U');
// BST.insert('E');
// BST.insert('S');
// BST.insert('T');
// BST.insert('I');
// BST.insert('O');
// BST.insert('N');

//console.log(BST);
//4. What does this program do?
function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}
//returns the sums of the tree, O(n)

//5. Height of a BST

function Height(tree){
  if(!tree) {
    return 0;
  }
  let left = Height(tree.left);
  let right = Height(tree.right);
  return Math.max(left,right)+1;
}
//console.log(Height(BST));

//6. Is it a BST?

function isBST(tree, min, max){
  if (tree.key < min) return false;
  if (tree.key > max) return false;
  if (tree.left && !isBST(tree.left, min, tree.key)) return false;
  if (tree.right && !isBST(tree.right, tree.key, max )) return false;
  else return true;
    
}
//console.log(isBST(BST));
//console.log(isBST(BST,5,4));

//7. 3rd largest node

function thirdLargest(tree){
  let max = tree._findMax();
  tree.remove(max.key);
  let secondMax = tree._findMax();
  tree.remove(secondMax.key);
  let thirdMax = tree._findMax();
  return thirdMax.key;
}
//console.log(thirdLargest(BST));

//8. Balanced BST
//A sorted array, make it a balanced tree
// function BalancedBST(arr,start = 0, end = arr.length-1 ){
//   if(start > end){
//     return;
//   }
//   let middle = Math.floor((start + end)/2);
//   let tree = new BST(arr[middle]);
//   tree.left = BalancedBST(arr,start, middle-1);
//   tree.right = BalancedBST(arr, middle+1, end);

//   return tree;
// }
// console.log(BalancedBST(BST));

function isBalanced(tree, counter){
  if (!tree.left) {
    return !(tree.right && (tree.right.left || tree.right.right));
  }
 
  if (!tree.right) {
    return !(tree.left && (tree.left.left || tree.left.right));
  }
 
  return isBalanced(tree.left) && isBalanced(tree.right);
}

//console.log(isBalanced(BST));

//9. Are they the same BSTs?

function sameBST(arr1, arr2){
  if((arr1 === null) && (arr2 ===null)) {
    return true;
  }    
  else if ((arr1 !== null && arr2 === null) || (arr1 === null && arr2 !==null)) {
    return false;
  }
  else if(arr1.key === arr2.key) { 
    return sameBST(arr1.left, arr2.left) && sameBST(arr1.right, arr2.right);
  } else {
    return false;
  }
 
}
let BST1 = new BinarySearchTree();
BST1.insert(3);
BST1.insert(5);
BST1.insert(4);
BST1.insert(6);
BST1.insert(1);
BST1.insert(0);
BST1.insert(2);
let BST2 = new BinarySearchTree();
BST2.insert(3);
BST2.insert(1);
BST2.insert(5);
BST2.insert(2);
BST2.insert(4);
BST2.insert(6);
//BST2.insert(0);

console.log(sameBST(BST1,BST2));