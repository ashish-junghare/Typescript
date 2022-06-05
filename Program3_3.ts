
class Circle
{
    protected Radius:number;
    protected PI:number;

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

class CircleX extends Circle
{
    CircumferanceCircle()
    {
        return 2*this.PI*this.Radius;
    }
}
function main():void
{
    var ret:number=0;
    var obj1=new Circle(5); 
    ret=obj1.AreaCircle();
    console.log("Area of circle  is: "+ret);
    var obj2=new CircleX(5);
    ret=obj2.CircumferanceCircle();
    console.log("Circumferance of circle  is: "+ret);

}


main();