//求从根节点到叶子节点等于sum的所有路径
//dfs
var pathSum = function(root, sum) {
    if(root==null){
        return [];
    }
    let arr=[],a=[];
    a.push(root.val)
    helper(root,sum,arr,a)
    return arr;
}
function helper(root,sum,arr,a){
    sum-=root.val;
    if(root.left==null&&root.right==null){
        if(sum==0){
            arr.push(a.slice(0));
        }
        return;
    }
    if(root.left){
        a.push(root.left.val)
        helper(root.left,sum,arr,a)
        a.pop();
    }
    if(root.right){
        a.push(root.right.val)
        helper(root.right,sum,arr,a)
        a.pop();
    }
}