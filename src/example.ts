function addList(number: number[]): number{
    var result: number = 0;
    number.map((num) => {
        result = result + num;
    })

    return result
}

var list = [1, 4, 5, 6, 9]
console.log(addList(list))