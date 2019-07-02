/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length==0){
        return 0;
    }
    var sum=nums[0],max=nums[0];
    for(var i=1;i<nums.length;i++){
        if(sum>0){
        //累计sum>0则加上后边的试试
            sum+=nums[i];
        }else{
        //累计sum<0，则从现在开始算起
            sum=nums[i];
        }
        if(sum>max){
           max=sum;
        }
    }
    return max;
};
