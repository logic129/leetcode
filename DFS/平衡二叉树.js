//判断是否是一个平衡二叉树
//任意一个节点的左右子树高度差小于1

/* ===从底到顶=== */
var isBalanced = function(root) {
    return helper(node)==-1?false:true
}
function helper(node){
    if(node==null){
        return 0;
    }
    let left=helper(node.left),right=helper(node.left);
    if(left==-1||right==-1){
        return -1;
    }
    return Math.abs(left-right)<2?Math.max(left,right)+1:-1;
}

/* ===从顶到底=== */
var isBalanced = function(root) {
    if(root==null){
        return true;
    }
    return Math.abs(helper(root.left)-helper(root.right))<2&&isBalanced(root.left)&&isBalanced(root.right);
}
function helper(node){
    if(node==null){
        return 0;
    }
    return Math.max(helper(node.left),helper(node.right))+1
}