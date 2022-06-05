function CalulateArea(iValue, PI) {
    if (PI === void 0) { PI = 3.14; }
    var iArea = 0;
    iArea = PI * iValue * iValue;
    return iArea;
}
function main() {
    var iRad = 5;
    var iRet = 0;
    iRet = CalulateArea(iRad);
    console.log("Area of circle is: " + iRet);
}
main();
