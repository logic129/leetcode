/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 //迭代
var inorderTraversal = function(root) {
    var stack=[],res=[];
    while(root||stack.length){
        while(root!=null){
        stack.push(root);
        root=root.left;
      }
      root=stack.pop();
      res.push(root.val);
      root=root.right;
  }
    return res;
};
//递归
var inorderTraversal = function(root,arr=[]) {
    if(root==null){
        return arr;  //配合leetcode的用例输出
    }
    inorderTraversal(root.left,arr);
    arr.push(root.val);
    inorderTraversal(root.right,arr);
    return arr;
};
///morris
var inorderTraversal = function(root) {
    var arr=[],curr=root;
    while(curr){
        if(!curr.left){  //当前节点没有左节点，则push当前节点，到右节点
            arr.push(curr.val);
            curr=curr.right;
        }else{    //当前节点有左节点，把当前节点作为左子树的最右节点的右节点
            var temp=curr.left;
            while(temp.right){
                temp=temp.right;
            }
            temp.right=curr;   //左子树的最右节点的右节点指向当前节点
            var t=curr;
            curr=curr.left;    //当前节点指向左节点
            t.left=null;   //切断当前节点的左节点指向
        }
    }
    return arr;
};