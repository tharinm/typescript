//primmitive types
let age: number;
age = 4;

let user: string;
user = "John Doe";

let instructor: boolean;
instructor: true;

let hobby: null;

//more complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "Max",
  age: 23,
};

let people: Person[];

//type interface
let course: string | number = "React - The complete guide";

course = 333434;
