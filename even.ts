function main():void
{
    var no1:number=11;
    var ret:boolean=false;

    ret=ChkEven(no1);
    if(ret==true)
    {
        console.log(no1+" is even number");
    }
    else
    {
        console.log(no1+" is odd number");
    }
}


function ChkEven(value1:number):boolean
{
    var flag:boolean=false;
    if(value1%2==0)
    {
        flag=true;
    }
    else
    {
        flag=false;
    }
    if(flag==true)
    {
        return true;
    }
    else
    {
        return false;
    }

}

main();