//快慢指针得中位数，把链表分为两部分，递归
var sortedListToBST = function(head) {
    if(head==null){
        return null;
    }
    if(head.next==null){
        return new TreeNode(head.val);
    }
    let pre=head,p=pre.next,q=p.next;  //利用快慢指针求中位数
    while(q!=null&&q.next!=null){
        pre=pre.next;
        p=pre.next;
        q=q.next.next;
    }
    pre.next=null; //把链表从前半部分断开
    let node=new TreeNode(p.val);
    node.left=sortedListToBST(head);
    node.right=sortedListToBST(p.next);
    return node;
};