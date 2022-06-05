var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.CircumferanceCircle = function () {
        return 2 * this.PI * this.Radius;
    };
    return CircleX;
}(Circle));
function main() {
    var ret = 0;
    var obj1 = new Circle(5);
    ret = obj1.AreaCircle();
    console.log("Area of circle  is: " + ret);
    var obj2 = new CircleX(5);
    ret = obj2.CircumferanceCircle();
    console.log("Circumferance of circle  is: " + ret);
}
main();
