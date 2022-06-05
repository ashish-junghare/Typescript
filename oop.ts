class Arithmetic
{
    Value1:number;
    Value2:number;

    constructor(No1:number,No2:number)
    {
        this.Value1=No1;
        this.Value2=No2;
    }

    Addition()
    {
        var ans:number=0;
        ans=this.Value1+this.Value2;
        return ans;
    }

    Substraction()
    {
        var ans:number=0;
        ans=this.Value1-this.Value2;
        return ans;
    }
}
var ret:number=0;
var aobj1=new Arithmetic(10,11)

ret=aobj1.Addition();
console.log("Addition is: "+ret)
ret=aobj1.Substraction();
console.log("Substraction is: "+ret)



var aobj2=new Arithmetic(20,21)
ret=aobj2.Addition();
console.log("Addition is: "+ret)
ret=aobj2.Substraction();
console.log("Substraction is: "+ret)