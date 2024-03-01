function addList(number) {
    var result = 0;
    number.map(function (num) {
        result = result + num;
    });
    return result;
}
var list = [1, 4, 5, 6, 9];
console.log(addList(list));
