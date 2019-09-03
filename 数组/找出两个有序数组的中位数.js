//把两个有序数组复制到另一个数组中
var findMedianSortedArrays = function(nums1, nums2) {
    let nums=[];
    let len1=nums1.length,len2=nums2.length;
    if(len1==0){
        if(len2%2==0){
            return (nums2[len2/2]+nums2[len2/2-1])/2;
        }else{
            return nums2[Math.floor(len2/2)]
        }
    }
    if(len2==0){
        if(nums1.length%2==0){
            return (nums1[len1/2]+nums1[len1/2-1])/2;
        }else{
            return nums1[Math.floor(len1/2)]
        }
    }
    
    let count=0;
    let i=0,j=0;
    while(count!=len1+len2){
        if(i==len1){
           while(j!=len2){
                 nums[count++]=nums2[j++];
            }
            break;
        }
        if(j==len2){
           while(i!=len1){
                 nums[count++]=nums1[i++];
           }
            break;
        }
        if(nums1[i]<nums2[j]){
            nums[count++]=nums1[i++];
        }else{
            nums[count++]=nums2[j++];
        }
    }
    if(count%2==0){
        return (nums[count/2]+nums[count/2-1])/2;
    }else{
        return nums[Math.floor(count/2)]
    }
};

//采用二分法：有瑕疵
var findMedianSortedArrays = function(nums1, nums2) {
    let len1=nums1.length,len2=nums2.length;
    if(len1==0){
        if(len2%2==0){
            return (nums2[len2/2]+nums2[len2/2-1])/2;
        }else{
            return nums2[Math.floor(len2/2)]
        }
    }
    if(len2==0){
        if(nums1.length%2==0){
            return (nums1[len1/2]+nums1[len1/2-1])/2;
        }else{
            return nums1[Math.floor(len1/2)]
        }
    }
    let len=len1+len2,k;
    let i=0,j=0;
    let sum=len,num;
    if(sum==2){
        return (nums1[0]+nums2[0])/2;
    }
    let a;
    a=nums1[0];
    while(len>0){
        k=Math.floor(len/2)==0?1:Math.floor(len/2);
        let h=Math.floor(k/2)==0?1:Math.floor(k/2);
        if(nums1[i+h-1]>nums2[j+h-1]){
            a=nums2[j+h-1];
            j+=h;
        }else{
            a=nums1[i+h-1];
            i+=h;
        }
        len-=h;
        if(sum%2==0&&len==(sum/2)){
            num=(a+Math.min(nums1[i],nums2[j]))/2;
            break;
        }else if(sum%2==1&&len==Math.ceil(sum/2)){
            num=Math.min(nums1[i],nums2[j])
            break;
        }
    }
    return num;
}