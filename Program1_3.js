function DisplayFact(iNo1) {
    var i = 0;
    for (i = 0; i < iNo1; i++) {
        if ((iNo1 % i) == 0) {
            console.log(i + '\n');
        }
    }
}
function main() {
    var iNo1 = 20;
    DisplayFact(iNo1);
}
main();
