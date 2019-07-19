//迭代BFS
var arr=[];
var zigzagLevelOrder = function(root) {
    arr.splice(0)
    helper(root);
    return arr;
};
function helper(root){
    if(root==null){
        return;
    }
    var stack=[],level=0;
    stack.push(root);
    while(stack.length){
        var len=stack.length;
        arr[level]=[];
        for(var i=0;i<len;i++){
            if(level%2==0){
                var r=stack.pop();
                arr[level].push(r.val);
                if(r.left){
                    stack.unshift(left)
                }
                if(r.right){
                    stack.unshift(right)
                }
            }else{
                var r=stack.shift();
                arr[level].push(r.val);
                if(r.right){
                    stack.push(left)
                }
                if(r.left){
                    stack.push(right)
                }
            }
        }
        if(arr[level].length==0){
            arr.pop();
        }
        level++;
    }
}

//递归 DFS
var arr=[];
var zigzagLevelOrder = function(root) {
    arr.splice(0)
    helper(root,0);
    return arr;
};
function helper(root,level){
    if(root==null){
        return;
    }
    if(!arr[level]){
        arr[level]=[];
    }
    if(level%2==1){
        arr[level].unshift(root.val)
    }else{
        arr[level].push(root.val)
    }
    helper(root.left,level+1)
    helper(root.right,level+1)
}