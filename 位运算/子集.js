//迭代
var subsets = function(nums) {
    var arr=[[]];
    for(var i=0;i<nums.length;i++){
        var len=arr.length;
        for(var j=0;j<len;j++){
            arr.push([...nums[j],nums[i]]);
        }
    }
}

//位运算
var subsets = function(nums) {
    var len=nums.length;
    var arr=[];
    for(var i=0;i<(1<<len);i++){  //[1,2,3] 1<<3==8，8次000,001，...
        var a=[];
        for(var j=0;j<len;j++){
            if((i&(1<<j))!=0){
                a.push(nums[j])
            }
        }
        arr.push(a.slice(0));
    }
    return arr;
};