/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        var temp=nums.indexOf(target-nums[i]);
        if(temp>-1&&temp!=i){
            return [i,temp];
        }
    }
    return false;
};
