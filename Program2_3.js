function DisplayMax(Brr) {
    Brr.sort(function (a, b) { return a - b; });
    return Brr[Brr.length - 2];
}
function main() {
    var iRet = 0;
    var Arr;
    Arr = [23, 89, 6, 29, 56, 45, 77, 32];
    iRet = DisplayMax(Arr);
    console.log("Second Maximum number is " + iRet);
}
main();
