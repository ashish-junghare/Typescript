function DisplayEven(iValue) {
    var i = 0;
    var bFlag = false;
    for (i = 2; i < iValue; i++) {
        if ((iValue % i) == 0) {
            bFlag = true;
        }
    }
    return bFlag;
}
function main() {
    var iNo1 = 10;
    var bRet = false;
    bRet = DisplayEven(iNo1);
    if (bRet == true) {
        console.log(iNo1 + " is not prime number");
    }
    else {
        console.log(iNo1 + " is prime number");
    }
}
main();
