/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 动态规划--斐波那契数列
 */
var uniquePaths = function(m, n) {
    var arr=[];
    for(var i=0;i<m;i++){
        arr[i]=new Array();
        for(var j=0;j<n;j++){
            arr[i][j]='0';
        }
    }
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(i==0||j==0){
                arr[i][j]=1;
            }else{
                arr[i][j]=arr[i-1][j]+arr[i][j-1];
            }
        }
    }
    return arr[m-1][n-1];
};
