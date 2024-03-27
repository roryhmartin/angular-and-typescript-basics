// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

// Declaring a variable 'age' of type 'number'
let age: number;

// Assigning the value 12 to the 'age' variable
age = 12; 

// Declaring a variable 'userName' that can hold a string or an array of strings
let userName: string | string[];

// Assigning the string 'Max' to the 'userName' variable
userName = 'Max';

// Declaring a variable 'isInstructor' of type 'boolean'
let isInstructor: boolean;

// Assigning the value 'true' to the 'isInstructor' variable
isInstructor = true;

// More complex types

// Declaring a variable 'hobbies' as an array of strings
let hobbies: string[];

// Assigning an array of strings to the 'hobbies' variable
hobbies = ['Sports', 'Cooking'];

// Defining a custom type 'Person' using an object type
type Person = {
  name: string;
  age: number;
};

// Declaring a variable 'person' of type 'Person'
let person: Person;

// Assigning an object with 'name' and 'age' properties to the 'person' variable
person = {
  name: 'Max',
  age: 32,
};

// Declaring a variable 'people' as an array of 'Person' type
let people: Person[];

// Type inference

// Declaring a variable 'course' with inferred type as 'string' or 'number'
let course: string | number = 'React - The Complete Guide';

// Reassigning 'course' variable to a number value
course = 12341;

// Functions & types

// Function to add two numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Function to print output
function printOutput(value: any): void {
  console.log(value);
}

// Generics

// Function to insert a value at the beginning of an array
function insertAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

// Example usage of generics
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// Class

// Class representing a student
class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  // Method to enroll in a course
  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  // Method to list enrolled courses
  listCourses(): string[] {
    return this.courses.slice();
  }
}

// Creating an instance of the Student class
const student = new Student('Max', 'Schwarz', 32, ['Angular']);

// Enrolling in a new course
student.enrol('React');

// Interface

// Interface representing a Human
interface Human {
  firstName: string;
  age: number;

  // Method to greet
  greet: () => void;
}

// Declaring a variable 'max' of type 'Human'
let max: Human;

// Assigning an object with 'firstName', 'age', and 'greet' properties to the 'max' variable
max = {
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hello!');
  },
};

// Class implementing the 'Human' interface
class Instructor implements Human {
  firstName: string;
  age: number;

  // Method implementation of the 'greet' method from the 'Human' interface
  greet() {
    console.log('Hello!!!!');
  }
}
