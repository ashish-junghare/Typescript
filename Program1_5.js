function DisplayFibonacci(iNo1) {
    var i = 0;
    var iValue1 = 0;
    var iValue2 = 1;
    var iSum = 0;
    console.log(iValue1);
    console.log(iValue2);
    iSum = iValue1 + iValue2;
    for (i = 3; i < iNo1; i++) {
        console.log(iSum);
        iValue1 = iValue2;
        iValue2 = iSum;
        iSum = iValue1 + iValue2;
        if (iSum > iNo1) {
            break;
        }
    }
}
function main() {
    var iNo1 = 21;
    DisplayFibonacci(iNo1);
}
main();
