var Ret = 0;
function Addtion(No1, No2) {
    var ans = 0;
    ans = No1 + No2;
    return ans;
}
function Substraction(No1, No2) {
    var ans = 0;
    ans = No1 - No2;
    return ans;
}
var Value1 = 10;
var Value2 = 11;
Ret = Addtion(Value1, Value2);
console.log("Addition is: " + Ret);
Ret = Substraction(Value1, Value2);
console.log("Substraction is: " + Ret);
