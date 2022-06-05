var Circle = /** @class */ (function () {
    function Circle(Value) {
        this.Radius = Value;
        this.PI = 3.14;
    }
    Circle.prototype.AreaCircle = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
function main() {
    var ret = 0;
    var obj = new Circle(10);
    ret = obj.AreaCircle();
    console.log("Area of circle  is: " + ret);
}
main();
