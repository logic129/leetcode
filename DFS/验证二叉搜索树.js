//递归
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


//利用中序遍历
//中序遍历树，得到一个升序数组，保存last值，和当前值相比较
var isValidBST = function(root) {
    if(root==null){
        return true;
    }
    var stack=[],last;
    while(root||stack.length){
        while(root!=null){
            stack.push(root);
            root=root.left;
        }
        root=stack.pop();
        if(last!=undefined&&last>=root.val){
            return false;
        }
        last=root.val;
        root=root.right;
    }
    return true;
};
