
function ChkArmstrong(iValue:number,iDigCnt:number):boolean
{
    var i:number=0;
    var iTemp:number=iValue;
    var iDig:number=0;
    var iSum:number=0;
    while(iValue>0)
    {
        var iCnt:number=0;
        var iMult:number=1;
        iDig=iValue%10;
        for(iCnt=1;iCnt<=iDigCnt;iCnt++)
        {
            iMult=iMult*iDig;
        }
        iSum=iSum+iMult;
        iValue=Math.floor(iValue/10);

    }
    if(iSum==iTemp)
    {
        return true;
    }
    else
    {
        return false;
    }

}


function main():void
{
    var iNo1:number=150;
    var i:number=iNo1;
    var iCnt:number=0;
    var bRet:boolean=false;
    while(i>0)
    {
        iCnt++;
        i=Math.floor(i/10);
    }
    bRet=ChkArmstrong(iNo1,iCnt);
    if(bRet==true)
    {
        console.log("It is armstrong number")
    }
    else
    {
        console.log("It is not armstrong number")
    }

}




main()