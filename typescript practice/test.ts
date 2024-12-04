//infered types
// let message = 'hello';
// console.log(message);

import { rejects } from 'assert';
import { resolve } from 'path';

//strongly typed syntax

// let a: string = 'hi';
// let b: number = 1;
// let c: (string | number)[] = [1, 3, 'ster'];

// type interference

// let e = 'usa';

//use const where variable do not change
// const a = 5;
// const b:number = 33;

// if (true) {
//   var z = 4;
// }

// console.log(z)

//type narrowing

// let a: string | number;

// a = 'narrowing';

// console.log(a.includes('n'));

//union literals

// let age: number | 'Died' | 'Unknown';

// age = 90;
// age = 'Died';
// age = 'Unknown';
// age = age

// console.log(age)

// type Student = {
//   name: string;
//   age?: number;
// };

// let student: Student = {
//   name: 'Saad',
//   age: 3,
// };

// console.log(student);

// interface Manager {
//   name: string;
//   subOrdinate?: number;
// }

// let storeManager: Manager = {
//   name: 'shams',
// };

// console.log(storeManager);

// interface Ball {
//   diameter: number;
//   check: number;
// }

// interface Sphere {
//   diameter: number;
//   length: number;
// }

// let ball: Ball = { diameter: 10, check: 20 };
// let sphere: Sphere = { diameter: 20, length: 20 };

// ball = sphere;

// console.log(ball);

// interface Author {
//   firstName: string;
//   lastName: string;
// }

// interface Book {
//   author: Author;
//   name: string;
// }

// let book: Book = {
//   author: {
//     firstName: 'Muhammad',
//     lastName: 'Naeem',
//   },
//   name: 'Harry Potter',
// };

// console.log(book)

// interface Student {
//   studId: number;
//   name: string;
// }

// interface Teacher {
//   teacherId: number;
//   teacherName: string;
// }

// type intersectedType = Student & Teacher;

// let intersectedObj: intersectedType = {
//   studId: 1,
//   name: 'naeem',
//   teacherId: 2,
//   teacherName: 'Beenish',
// };

// enum Color {
//   'RED',
//   'GREEN',
//   'Blue',
// }

// let c: Color = Color.Blue;

// console.log(Color[1])

// let arr: number[];

// let arr1: Array<number>;

// function add(x: number, y: number): number {
//   return x + y;
// }

// console.log(add(1, 2));

// let add: (x: number, y: number) => number = (x: number, y: number): number => {
//   try {
//     return x + y;
//   } catch (error) {
//     return NaN;
//   }
// };

// console.log(add(10, 12));

//rest parameter function

// let add = (...rest: number[]): void => {
//   console.log(rest);
// };

// console.log(add(1, 2, 2, 3, 4));

// let callBackFunc = (): string => {
//   return 'call back called';
// };

// let parentFunction = (cb: () => string): void => {
//   console.log('run');
//   console.log(cb());
// };

// parentFunction(callBackFunc);

// let orderPizza = () => {
//   return new Promise((resolve, reject) => {

//   });
// };

// class Animal {
//   name: string;
//   age: string;
//   constructor(name: string, age: string) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(this.name, 'is a animal and it is eating');
//   }
// }

// let a1 = new Animal('Dog', '12');

// console.log(a1.age)

// let printOddNumber = (num: number) => {
//   if (num < 1) {
//     return;
//   }

//   if (num % 2 !== 0) {
//     console.log(num);
//     printOddNumber(num-4);
//   } else {
//     printOddNumber(num - 1);
//   }
// };

// printOddNumber(1000);

//swap two numbers without using third variable

// let x = 10;
// let y = 20;

// x = x + y;
// y = x - y;
// x = x-y

// console.log(x);
// console.log(y);

// swap two strings with out using third variable

// let x = 'hello';
// let y = 'world';

// [x, y] = [y, x];

// console.log(x)

//find duplicates

// let findDuplicate = (str: string): string => {
//   let removeDuplicate: string[] = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i+1; j < str.length; j++) {
//       if (str[i] === str[j] && !removeDuplicate.includes(str[i]) ) { // LL E
//         removeDuplicate.push(str[i]);
//       }
//     }
//   }

//   console.log(removeDuplicate);
//   return 'str';
// };

// const inputString = 'LEVELLE';

// findDuplicate(inputString);

// find the laregetst number in the array

// let a = [10, 9, 8, 12, 123, 34];
// let max = a[0];

// for (let num of a) {
//   if (num > max) {
//     max = num
//   }
// }

// console.log(max)

// Program 5: Fibonacci Series
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// let fibseries = [0, 1];
// let printFibonacciSeries = (num: number) => {
//   if (num <= 0) {
//     return [];
//   }
//   if (num == 1) {
//     return [0];
//   }
//   if (num == 2) {
//     return [0, 1];
//   }

//   for (let index = 2; index < num; index++) {
//     fibseries.push(fibseries[index - 2] + fibseries[index - 1]);
//   }
// };
// printFibonacciSeries(10)
// console.log(fibseries)