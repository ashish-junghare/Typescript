
function DisplayMax(Brr):number
{
    var iTemp:number=Brr[0];
    var i:number=0;
    for(i=0;i<Brr.length;i++)
    {
        if(iTemp<Brr[i])
        {
            iTemp=Brr[i];
        }
    }
    return iTemp;


    

}


function main():void
{
    var iRet:number=0;
    var Arr:number[];
    Arr=[23,89,6]

    iRet=DisplayMax(Arr);
    console.log("Maximum number is "+iRet);
}




main()