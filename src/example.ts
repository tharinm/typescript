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

function add(a: number, b: number): number | string {
  return a + b;
}

add(5, 9);

// function print(value: any) {
//   console.log(value);
// }

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
}

const demoArray = [1, 2, 3];

const updateAaaray = insertAtBeginning(demoArray, -1);

updateAaaray[0].split("");

//Class

class Student {
  fname: string;
  lname: string;
  age: number;

  course: string[];

  constructor(first: string, last: string, age: number, course: string[]) {
    this.fname = first;
    this.lname = last;
    this.age = age;
    this.course = course;
  }

  enrol(courseName: string) {
    this.course.push(courseName);
  }
}

const student = new Student("Tharindu", "Madhushan", 25, ["WebDevelopment"]);
student.enrol("React");

//Interfaces
interface Human {
  vehicleType: string;
  lastyear: number;

  greet: () => void;
}

let max: Human;

max = {
  vehicleType: "wheel",
    lastyear: 34,
  
    greet() {
        console.log('hellow function')
    }
};
