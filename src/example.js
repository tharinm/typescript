var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//primmitive types
var age;
age = 4;
var user;
user = "John Doe";
var instructor;
instructor: true;
var hobby;
//more complex types
var hobbies;
hobbies = ["Sports", "Cooking"];
var person;
person = {
    name: "Max",
    age: 23,
};
var people;
//type interface
var course = "React - The complete guide";
course = 333434;
function add(a, b) {
    return a + b;
}
add(5, 9);
// function print(value: any) {
//   console.log(value);
// }
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
}
var demoArray = [1, 2, 3];
var updateAaaray = insertAtBeginning(demoArray, -1);
updateAaaray[0].split('');
