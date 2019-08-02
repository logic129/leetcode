var findKthLargest = function(nums, k) {
    nums.sort(function(x,y){
        return y-x;
    })
    return nums[k-1]
};