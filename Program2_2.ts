
function SumAll(Brr):number
{
    var i:number=0;
    var iSum:number=0;
    for(i=0;i<Brr.length;i++)
    {
        iSum=iSum+Brr[i];
    }
    return iSum;
}


function main():void
{
    var iRet:number=0;
    var Arr:number[];
    Arr=[23,6,7,4,5,7]

    iRet=SumAll(Arr);
    console.log("Addition of number is "+iRet);
}




main()