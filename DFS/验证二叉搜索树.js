//递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function helper(root,min,max){
    if(root==null){
        return true;
    }
    if(min!=null&&root.val<=min){
        return false;
    }
    if(max!=null&&root.val>=max){
        return false;
    }
    if(!helper(root.right,root.val,max)){
       return false;
    }
    if(!helper(root.left,min,root.val)){
       return false;
    }
    return true;
}
var isValidBST = function(root) {
    return helper(root,null,null)
};

//迭代
