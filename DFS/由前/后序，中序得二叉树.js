//前序，中序-》二叉树
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

//后序，中序-》二叉树
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