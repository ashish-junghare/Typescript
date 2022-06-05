function SumAll(Brr) {
    var i = 0;
    var iSum = 0;
    for (i = 0; i < Brr.length; i++) {
        iSum = iSum + Brr[i];
    }
    return iSum;
}
function main() {
    var iRet = 0;
    var Arr;
    Arr = [23, 6, 7, 4, 5, 7];
    iRet = SumAll(Arr);
    console.log("Addition of number is " + iRet);
}
main();
