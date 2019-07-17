//dfs递归
var levels=[]
var levelOrder = function(root){
    levels.splice(0);
    helper(root,0);
    return levels;
}
function helper(root,level){
    if(levels.length==level){
        levels[level]=[]
    }
    levels[level].push(root.val);
    if(root.left){
        helper(root.left,level+1)
    }
    if(root.right){
        helper(root.right,level+1)
    }
}

//bfs迭代
var levels=[]
var levelOrder = function(root){
    levels.splice(0);
    helper(root);
    return levels;
}
function helper(root){
    var queue=[],level=0;
    queue.push(root);
    while(queue.length){
        levels[level]=[];
        var len=queue.length;
        for(var i=0;i<len;i++){
            var r=queue.shift();
            levels[level].push(r.val);
            if(r.left){
                queue.push(r.left);
            }
            if(r.right){
                queue.push(r.right);
            }
        }
        level++;
    }
}