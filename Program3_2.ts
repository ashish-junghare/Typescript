
class Circle
{
    Radius:number;
    PI:number;

    constructor(Value:number)
    {
        this.Radius=Value;
        this.PI=3.14
    }
    AreaCircle()
    {
        return this.PI*this.Radius*this.Radius;
    }
}
function main():void
{
    var ret:number=0;
    var obj=new Circle(10); 
    ret=obj.AreaCircle();
    console.log("Area of circle  is: "+ret);

}


main();