var Ret = 0;
console.log("normal function:- ");
function Addition1(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
Ret = Addition1(10, 11);
console.log("Addition is: " + Ret);
console.log("anonymus function:- ");
var Addition2 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
Ret = Addition2(10, 12);
console.log("Addition is: " + Ret);
console.log("fat arrow function:- ");
var Addition3 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
Ret = Addition3(10, 13);
console.log("Addition is: " + Ret);
