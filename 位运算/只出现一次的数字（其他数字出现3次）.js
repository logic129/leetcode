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

//位运算
var singleNumber = function(nums) {
    var one=0,two=0,three=0;
    for(var i=0;i<nums.length;i++){
        two|=one&nums[i];  //提取one和nums[i]的都为1的位，和之前求得two取并集
        one^=nums[i];   //one记录出现一次的位
        three=one&two;  //取交集，若有一，则那一位出现了三次
        one&=~three;  //three有一位为1，one，two清零
        two&=~three;
    }
    return one;
};