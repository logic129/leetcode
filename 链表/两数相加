/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, c=0) {
    if(l1!=null||l2!=null){
        var l3=new ListNode(1);
        var  num1=l1==null?0:l1.val,
            num2=l2==null?0:l2.val;
        var sum=num1+num2+c;
        l3.val=sum%10;
        c=Math.floor(sum/10)
        var next1=l1===null?null:l1.next;
        var next2=l2===null?null:l2.next;
        l3.next=addTwoNumbers(next1,next2,c);
        return l3;
    }else{
        return c==0?null:new ListNode(c);
    }
};
