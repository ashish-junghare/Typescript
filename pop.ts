

var Ret:number=0;
function Addtion(No1:number,No2:number)
{
    var ans:number=0;
    ans=No1+No2;
    return ans;
}

function Substraction(No1:number,No2:number)
{
    var ans:number=0;
    ans=No1-No2;
    return ans;
}



var Value1:number=10;
var Value2:number=11;

Ret=Addtion(Value1,Value2)
console.log("Addition is: "+Ret)

Ret=Substraction(Value1,Value2)
console.log("Substraction is: "+Ret)