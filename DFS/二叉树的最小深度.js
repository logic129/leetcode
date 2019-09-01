//从顶到底
var minDepth = function(root) {
    return helper(root);
}
function helper(node){
    if(node==null){
        return 0;
    }
    if(!node.left&&node.right){  //只有左节点，深度为左节点的深度+1
        return helper(node.right)+1
    }
    if(!node.right&&node.left){
        return helper(node.left)+1
    }
    return Math.min(helper(node.left),helper(node,right))+1;  //两个节点都存在，深度取最小
}