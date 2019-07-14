// 递归
var isSameTree = function(p, q) {
    if(p==null&&q==null){
        return true;
    }
    if(p==null||q==null){
        return false;
    }
    if(p.val!=q.val){
        return false;
    }
    if(!isSameTree(p.left,q.left)){
        return false;
    }
    if(!isSameTree(p.right,q.right)){
        return false;
    }
    return true;
};

//迭代  很laji的一段
var isSameTree = function(p, q) {
    var stackp=[],stackq=[];
    if(p==null&&q==null){  //p==q==null时
        return true;
    }
    if(p==null||q==null){  //其中一个为null
        return false;
    }
    stackp.push(p);
    stackq.push(q);
    var qv,pv;
    while(stackp.length){
        pv=stackp.pop();
        qv=stackq.pop();
        if(pv==null||qv==null||pv.val!=qv.val){ //防止pv,qv其中一个是null，就返回false，不可能两个都是false，因为下边push不了
            return false;
        }
        if(pv.left!=null||qv.left!=null){  //其中有一个不为null。可能有一个数字，一个null的情况
            stackp.push(pv.left);
            stackq.push(qv.left);
        }
         if(pv.right!=null||qv.right!=null){  //同上
            stackp.push(pv.right);
             stackq.push(qv.right);
        }
    }
    return true;
};