
function DisplayMax(Brr):number
{

    Brr.sort(function(a, b){return a - b});

    return Brr[Brr.length-2];

}



function main():void
{
    var iRet:number=0;
    var Arr:number[];
    Arr=[23,89,6,29,56,45,77,32]

    iRet=DisplayMax(Arr);
    console.log("Second Maximum number is "+iRet);
}




main()