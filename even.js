function main() {
    var no1 = 11;
    var ret = false;
    ret = ChkEven(no1);
    if (ret == true) {
        console.log(no1 + " is even number");
    }
    else {
        console.log(no1 + " is odd number");
    }
}
function ChkEven(value1) {
    var flag = false;
    if (value1 % 2 == 0) {
        flag = true;
    }
    else {
        flag = false;
    }
    if (flag == true) {
        return true;
    }
    else {
        return false;
    }
}
main();
