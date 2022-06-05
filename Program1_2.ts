
function CalulateArea(iValue:number,PI=3.14):number
{
    var iArea:number=0;

    iArea=PI*iValue*iValue;

    return iArea;

}


function main():void
{
    var iRad:number=5;
    var iRet:number=0;

    iRet=CalulateArea(iRad);
    console.log("Area of circle is: "+iRet);
}




main()