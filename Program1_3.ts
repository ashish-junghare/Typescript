
function DisplayFact(iNo1:number):void
{
    var i:number=0;
    for(i=0;i<iNo1;i++)
    {
        if((iNo1%i)==0)
        {
            console.log(i+'\t');
        }
    }
}


function main():void
{
    var iNo1:number=20;

    DisplayFact(iNo1);
}




main()