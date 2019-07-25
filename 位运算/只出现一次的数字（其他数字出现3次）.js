//给数组去重，和乘3，减去原数组和，除2
var singleNumber = function(nums) {
    var set=[...new Set(nums)];
    var max=nums.reduce((b,a)=>{
        return b+a;
    })
    var sum=set.reduce((b,a)=>{
        return b+a;
    })
    return (3*sum-max)/2;
};

