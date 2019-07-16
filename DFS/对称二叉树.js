//递归
var isSymmetric = function(root) {
    return isSame(root,root);
};
function isSame(root1,root2){
    if(root1==null&&root2==null){
        return true;
    }
    if(root1==null||root2==null){
        return false;
    }
    if(roo1.val!=root2.val){
        return false;
    }
    return isSame(root1.left,root2.right)&&isSame(root1.right,root2.left)
}

//迭代
var isSymmetric = function(root) {
    if(root==null){
        return true;
    }
    return isSame(root,root);
};
function isSame(root1,root2){
    var stack1=[],stack2=[],r1,r2;
    stack1.push(root1);
    stack2.push(root2);
    while(stack1.length){
        r1=stack1.pop();
        r2=stack2.pop();
        if(r1==null&&r2==null){
            continue;
        }
        if(r1==null||r2==null){
            return false;
        }
        if(r1.val!=r2.val){
            return false;
        }
        if(r1.left!=null||r1.right!=null){  //二者有一个子节点时，null也要push。防止顺拐
            stack1.push(r1.left);
            stack1.push(r1.right);
        }
        if(r2.right!=null||r2.left!=null){
            stack2.push(r2.right);
            stack2.push(r2.left);
        }
        if(stack1.length!=stack2.length){  //一个有子节点，一个没有，返回false
            return false;
        }
    }
    return true;
}