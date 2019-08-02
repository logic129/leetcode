var convert = function(s, numRows) {
    if(numRows==1){
       return s;
       }
    var arr=[];
    for(var i=0;i<numRows;i++){
        arr[i]=[];
    }
    var index=0,x=0,sign=0;
    for(var j=0;j<s.length;j++){
        if(x%(numRows-1)==0){
           arr[index][x]=s[j];
            index++;
        }else{
            arr[index][x]=s[j];
        }
        if(index==numRows){
            sign=1;
            index--;
        }
        if(sign==1){
            index--;
            x++;
        }
        if(index==0){
            sign=0;
        }
    }
    var str='';
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            if(arr[i][j]!=undefined&&arr[i][j]!=' '){
                str+=arr[i][j];
            }
        }
    }
    return str;
};