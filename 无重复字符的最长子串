/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var str='',maxlen=0;
    for(var i=0;i<s.length;i++){
        var index=str.indexOf(s[i]);
        str+=s[i];
        if(index>-1){
             str=str.substring(index+1,str.length);
        }
        maxlen=str.length>maxlen?str.length:maxlen;
    }
    return maxlen;
};
