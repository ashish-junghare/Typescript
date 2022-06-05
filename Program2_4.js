function ChkArmstrong(iValue, iDigCnt) {
    var i = 0;
    var iTemp = iValue;
    var iDig = 0;
    var iSum = 0;
    while (iValue > 0) {
        var iCnt = 0;
        var iMult = 1;
        iDig = iValue % 10;
        for (iCnt = 1; iCnt <= iDigCnt; iCnt++) {
            iMult = iMult * iDig;
        }
        iSum = iSum + iMult;
        iValue = Math.floor(iValue / 10);
    }
    if (iSum == iTemp) {
        return true;
    }
    else {
        return false;
    }
}
function main() {
    var iNo1 = 150;
    var i = iNo1;
    var iCnt = 0;
    var bRet = false;
    while (i > 0) {
        iCnt++;
        i = Math.floor(i / 10);
    }
    bRet = ChkArmstrong(iNo1, iCnt);
    if (bRet == true) {
        console.log("It is armstrong number");
    }
    else {
        console.log("It is not armstrong number");
    }
}
main();
