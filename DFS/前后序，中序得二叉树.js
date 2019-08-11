//前序，中序-》二叉树
//1.
var buildTree=function(preorder,inorder){
    if(preorder.length==0||inorder.length==0){
        return null;
    }
    for(let i=0;i<preorder.length;i++){
        if(i==0){
            var root=new TreeNode(preorder[0]);
        }else{
            insert(preorder[i],root)
        }
    }
    function insert(val,curRoot){
        var rootIndex=inorder.indexOf(curRoot.val),
        inIndex=inorder.indexOf(val);
        if(rootIndex>inIndex){
            if(curRoot.left){
                insert(val,curRoot.left)
            }else{
                curRoot.left=new TreeNode(val);
            }
        }
        if(rootIndex<inIndex){
            if(curRoot.right){
                insert(val,curRoot.right)
            }else{
                curRoot.right=new TreeNode(val);
            }
        }
    }
    return root;
}
//2.
var buildTree = function(preorder, inorder) {
    let index=0;
    return helper(preorder,inorder,0,preorder.length-1);
    function helper(preorder,inorder,start,end){
        if(start>end){
            return null;
        }
        let val=preorder[index++];
        let node=new TreeNode(val);
        let iIndex=inorder.indexOf(val);
        node.left=helper(preorder,inorder,start,iIndex-1);
        node.right=helper(preorder,inorder,iIndex+1,end);
        return node;
    }
};



//后序，中序-》二叉树
//1.
var buildTree = function(inorder, postorder) {
    if(inorder.length==0||postorder.length==0){
        return null;
    }
    for(let i=postorder.length-1;i>=0;i--){
        if(i==postorder.length-1){
           var root=new TreeNode(postorder[postorder.length-1])
           }else{
               insert(postorder[i],root)
           }
    }
    function insert(val,curRoot){
        var rootIndex=inorder.indexOf(curRoot.val),
            inIndex=inorder.indexOf(val);
        if(rootIndex<inIndex){
           if(curRoot.right){
            insert(val,curRoot.right)
           }else{
              curRoot.right=new TreeNode(val)
          }
       }
        if(rootIndex>inIndex){
           if(curRoot.left){
            insert(val,curRoot.left)
           }else{
              curRoot.left=new TreeNode(val)
          }
       }
    }
    return root;
};
//2.
var buildTree = function(inorder, postorder) {
    let index=postorder.length-1;
    return helper(inorder, postorder,0,inorder.length-1);
    function helper(inorder, postorder,start,end){
        if(start>end||index<0){
            return null;
        }
        let val=postorder[index--];
        let node=new TreeNode(val);
        let iIndex=inorder.indexOf(val);
        node.right=helper(inorder, postorder,iIndex+1,end);
        node.left=helper(inorder, postorder,start,iIndex-1);
        return node;
    }
};