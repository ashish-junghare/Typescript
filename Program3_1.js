var Arithmetic = /** @class */ (function () {
    function Arithmetic(a, b) {
        this.Number1 = a;
        this.Number2 = b;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic.prototype.Substraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithmetic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithmetic;
}());
function main() {
    var ret = 0;
    var obj = new Arithmetic(10, 5);
    ret = obj.Addition();
    console.log("Addition is: " + ret);
    ret = obj.Substraction();
    console.log("Substraction is: " + ret);
    ret = obj.Multiplication();
    console.log("Multiplication is: " + ret);
    ret = obj.Division();
    console.log("Division is: " + ret);
}
main();
