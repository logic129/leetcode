//位运算，两个相同的数异或为0，遍历异或，最后的到的值就是只出现一次的值
var singleNumber = function(nums) {
    var res=nums[0];
    for(var i=1;i<nums.length;i++){
        res=res^nums[i];
    }
    return res;
};

//借用哈希表记录数字出现次数
var singleNumber = function(nums) {
    var obj={};
    for(var i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=0;
        }
        obj[nums[i]]++;
    }
    for(var key in obj){
        if(obj[key]==1){
            return key;
        }
    }
    return -1;
};