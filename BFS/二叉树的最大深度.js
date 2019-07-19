//DFS递归
var max;
var maxDepth = function(root) {
    max=0;
    helper(root,max);
    return max;
};
function helper(root,num){
    if(root==null){
        if(num>=max){
            max=num;
        }
        return;
    }
    helper(root.left,num+1)
    helper(root.right,num+1)
}

//BFS迭代
var maxDepth = function(root) {
    if(root==null){
        return 0;
    }
    var stack=[],level=0;
    stack.push(root);
    while(stack.length){
        var len=stack.length;
        level++;
        for(var i=0;i<len;i++){
            var r=stack.shift();
            if(r.left){
                stack.push(r.left);
            }
            if(r.right){
                stack.push(r.right);
            }
        }
    }
    return level;
}