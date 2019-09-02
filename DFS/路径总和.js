//sum==某一叶子节点
var hasPathSum = function(root, sum) {
    if(root==null){
        return false;
    }
    let stack=[],value=[];
    stack.push(root);
    value.push(sum-root.val);
    while(stack.length){
        let cur=value.shift(),node=stack.shift();
        if(cur==0&&node.left==null&&node.right==null){
            return true;
        }
        if(node.left){
            stack.push(node.left)
            value.push(cur-node.left.val)
        }
        if(node.right){
            stack.push(node.right)
            value.push(cur-node.right.val)
        }
    }
    return false;
}

var hasPathSum = function(root, sum) {
    if(root==null){
        return false;
    }
    sum-=root.val;
    if(root.left==null&&root.right==null){
        return sum==0
    }
    return hasPathSum(root.left, sum)||hasPathSum(root.right, sum)
}