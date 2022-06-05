
class Arithmetic
{
    Number1:number;
    Number2:number;

    constructor(a:number,b:number)
    {
        this.Number1=a;
        this.Number2=b;
    }

    Addition()
    {
        return this.Number1+this.Number2;
    }
    Substraction()
    {
        return this.Number1-this.Number2;
    }
    Multiplication()
    {
        return this.Number1*this.Number2;
    }
    Division()
    {
        return this.Number1/this.Number2;
    }


}
function main():void
{
    var ret:number=0;
    var obj=new Arithmetic(10,5)
    ret=obj.Addition();
    console.log("Addition is: "+ret)
    ret=obj.Substraction();
    console.log("Substraction is: "+ret)
    ret=obj.Multiplication();
    console.log("Multiplication is: "+ret)
    ret=obj.Division();
    console.log("Division is: "+ret)
}


main();