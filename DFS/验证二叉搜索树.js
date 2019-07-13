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
var stack=[],low=[],high=[];
function add(node,lows,highs){
    stack.push(node);
    low.push(lows);
    high.push(highs);
}
var isValidBST = function(root) {
    var lower=null,higher=null;
    add(root,null,null);
    while(stack.length){
        root=stack.pop();
        lower=low.pop();
        higher=high.pop();
        if(root==null){
            continue;
        }
        if(lower!=null&&lower>=root.val){
            return false;
        }
        if(higher!=null&&higher<=root.val){
            return false;
        }
        add(root.right,root.val,higher);
        add(root.left,lower,root.val);
    }
    return true;
};

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
