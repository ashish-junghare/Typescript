var Arithmetic = /** @class */ (function () {
    function Arithmetic(No1, No2) {
        this.Value1 = No1;
        this.Value2 = No2;
    }
    Arithmetic.prototype.Addition = function () {
        var ans = 0;
        ans = this.Value1 + this.Value2;
        return ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var ans = 0;
        ans = this.Value1 - this.Value2;
        return ans;
    };
    return Arithmetic;
}());
var ret = 0;
var aobj1 = new Arithmetic(10, 11);
ret = aobj1.Addition();
console.log("Addition is: " + ret);
ret = aobj1.Substraction();
console.log("Substraction is: " + ret);
var aobj2 = new Arithmetic(20, 21);
ret = aobj2.Addition();
console.log("Addition is: " + ret);
ret = aobj2.Substraction();
console.log("Substraction is: " + ret);
