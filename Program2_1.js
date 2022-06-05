function DisplayMax(Brr) {
    var iTemp = Brr[0];
    var i = 0;
    for (i = 0; i < Brr.length; i++) {
        if (iTemp < Brr[i]) {
            iTemp = Brr[i];
        }
    }
    return iTemp;
}
function main() {
    var iRet = 0;
    var Arr;
    Arr = [23, 89, 6, 29, 56, 45, 77, 32];
    iRet = DisplayMax(Arr);
    console.log("Maximum number is " + iRet);
}
main();
