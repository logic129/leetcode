var maxSlidingWindow = function(nums, k) {
    if(nums.length==0||k==0){
        return [];
    }
    let arr=[],index=[];//index存储可能的最大值
    for(let i=0;i<k;i++){
        while(index.length&&nums[i]>nums[index[index.length-1]]){
            index.pop();
        }
        index.push(i);
    }
    arr.push(nums[index[0]]);
    for(let i=k;i<nums.length;i++){
        while(index.length&&nums[i]>nums[index[index.length-1]]){
            index.pop();
        }
        while(index.length&&index[0]<=i-size){
            index.shift();
        }
        index.push(i);
        arr.push(index[0]);
    }
    return arr;
}