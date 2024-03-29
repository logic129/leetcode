/**
 * @param {string} s
 * @return {string}
 *自己的解法： 原本94/103通过，有瑕疵- -，特别长的字符且每个字符都一样，执行超出时间限制
 *加了一行代码：if(maxlen>=s.length-1-i){break;}  maxlen为可达到的最大值时，跳出循环，就通过了。
 *但是时间复杂度较高
 */
var longestPalindrome = function(s) {
    if(s.length<=1){
        return s;
    }
    var str='',maxlen=0,result='';
    for(var i=0;i<s.length;i++){
        var index=s.lastIndexOf(s[i]);  //寻找第一个末尾的字符，截取子串为str
        if(index>-1&&index!=i){
            str=s.substring(i,index+1);
        }
        
        while(index>-1&&index!=i){   //从末尾找和s[i]相同的字符，判断这段字符是否是回文。且长度是否
          if(Palindrome(str)&&str.length>maxlen){
                result=str;
                index=-1;
                maxlen=str.length;
            }else{
                str=str.substring(0,str.length-1);  //截掉最后一个字符
                index=str.lastIndexOf(s[i]); //从末尾开始找与第一个字符相同的字符
                if(index>-1){
                    str=str.substring(0,index+1); //截取可能是回文的字符串
                }
            }
        }
        if(maxlen>=s.length-1-i){  //如果子串长度大于s.length-1-i，则直接跳出循环
          break;
        }
    }
    if(result.length==0){   //无回文字符串，返回第一个字符
        return s[0];
    }
    return result;
};

function Palindrome(str){   //判断是否是回文字符串
    for(var i=0;i<Math.floor(str.length/2);i++){
        if(str[i]!=str[str.length-1-i]){
            return false;
        }
        if(i==Math.floor(str.length/2)-1){
            return true;
        }
    }
}


/*==================中心扩散法=====================*/
/**
 * @param {string} s
 * @return {string}
 *时间复杂度较低
 */
var longestPalindrome = function(s) {
    if(s.length<=1){
        return s;
    }
    var str='',maxlen=0,result='';
    for(var i=1;i<s.length;i++){   //处理奇数回文子串
        for(var j=1;j<=i;j++){
            if(s[i-j]!=s[i+j]){
                str=s.substring(i-j+1,i+j);
                break;
            }
            if(j==i&&s[0]==s[i+j]){
                str=s.substring(0,i+j+1);
                break;
            }
        }
        if(maxlen<str.length){
            maxlen=str.length;
            result=str;
        }
    }
    for(var i=0;i<s.length-1;i++){  //处理偶数回文子串
        if(s[i]==s[i+1]){
            for(var j=0;j<=i;j++){
                if(s[i-j]!=s[i+j+1]){
                    str=s.substring(i-j+1,i+j+1);
                    break;
                }
                if(j==i&&s[0]==s[i+j+1]){
                    str=s.substring(0,i+j+2);
                    break;
                }
            }
        }
        if(maxlen<str.length){
            maxlen=str.length;
            result=str;
        }
    }
    if(result.length==0){
        return s[0];
    }
    return result;
};
