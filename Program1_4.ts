
function DisplayEven(iValue:number):boolean
{
    var i:number=0;
    var bFlag:boolean=false;
    for(i=2;i<iValue;i++)
    {
        if((iValue%i)==0)
        {
            bFlag=true;
        }
    }
    return bFlag;

}


function main():void
{
    var iNo1:number=11;
    var bRet:boolean=false;

    bRet=DisplayEven(iNo1);
    if(bRet==true)
    {
        console.log(iNo1+" is not prime number");
    }
    else
    {
        console.log(iNo1+" is prime number");
    }
}




main()