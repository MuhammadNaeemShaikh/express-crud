// Class & Object

// Objects are entities in the real world.

// class is a blue print of entites.

// class Teacher {
//   name!: string;
//   dept!: string;
//   subject!: string;
//   private salary!: number;

//   changedept(dept: string) {
//     this.dept = dept;
//   }

//   set(sal: number) {
//     this.salary = sal;
//   }

//   get() {
//     return this.salary;
//   }
// }

// let t1 = new Teacher();
// t1.dept = 'eng';
// t1.set(10);

//Access Modifier

// private data and method availble inside class
// public data and method accessible to every one.
// protected data and method accessible inside class or in derived classes.

// oop pillar

// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// 1 Encapsulation
// benefits
// data hiding -> private access modifier sensitive information

// class Account {
//   private password!: number; //data hiding
//   private balance!: number;

//   public userName!: string;
//   public id!: string;

//   constructor() {
//     console.log('hello');
//   }
// }

// let a1 = new Account();

//constructor

// special method invoked automatically at time of object creation. Used for initialisation.
// Same name as class.
// Constructor dosen't have a return type.
// Only called once automatically,at object creation.
// Memory allocation happened when constructor is called.

// class Account {
//   private password!: number; //data hiding
//   private balance!: number;

//   public userName!: string;
//   public id!: string;

  //   Non parameterized constructor
  //   constructor() {
  //     console.log('hello');
  //   }

  //  parameterized constructor
//   constructor(password: number, balance: number) {
//     this.balance = balance;
//     this.password = password;
//   }
// }

// let a1 = new Account(1, 21);

// copy constructor worked in c++ but not in typescript
// let a2 = new Account(a1);

// there are three types of constructor
// 1. Non parameterized constructor
// 2. Parameterized constructor
// 3. Copy Constructor

// Copy Constructor
// Special constructuor (default) used to copy properties of  one object into another

//this is a special pointer in oop that targets current object
// this.prop

// Shallow copy and deep copy

// A Shallow copy of an object copies all of the member values from one object to another.

// A deep copy on the other hand not only copies the member values but also make copies of any dynamically allocated memory that the members point to.

// copy constructor create shallow copy

//destructor

// delocate the memory

// Inheritance
// When properties and members function of base class are passed on to the derived class.
// Inheritance is used for code reusability
// In Inheritance based class constructor called first then derived class constructor called.

// class Person {
//   constructor(public name: string, public age: number) {
//   }
// }

// class Student extends Person {
//   constructor(public rollNo: string, public name: string, public age: number) {
//     super(name, age);
//   }
// }

// let s1 = new Student('1', 'Naeem', 18);

// console.log(s1);

// type of inheritance
// Single Inheritance

// Parent Child

// class Person {
//   constructor(public name: string, public age: number) {}
// }

// class Student extends Person {
//   constructor(public rollNo: string, public name: string, public age: number) {
//     super(name, age);
//   }
// }

// let s1 = new Student('1', 'Naeem', 18);

// multilevel inheritance

// class Person {
//   constructor(public name: string, public age: number) {}
// }

// class Student extends Person {
//   constructor(public name: string, public age: number, public rollNo: number) {
//     super(name, age);
//   }
// }

// class GradStud extends Student {
//   constructor(
//     public name: string,
//     public age: number,
//     public rollNo: number,
//     public researchArea: string
//   ) {
//     super(name, age, rollNo);
//   }
// }

// Multiple inheritance

// When one child class inherites two parent class properties.
// multiple inheritance is not supported by typescript

// class Student {
//   constructor(public name: string, public rollNo: string) {}
// }

// class Teacher {
//   constructor(public subject: string, public salary: string) {}
// }

// class TA extends Student,Student{

// }

// Hierarchial Inheritance

// Multiple child class belongs to one parent.

// class Person {
//   constructor(public name: string) {}
// }

// class Student extends Person {
//   constructor(public name: string, public rollNo: string) {
//     super(name);
//   }
// }

// class Teacher extends Person {
//   constructor(
//     public name: string,
//     public subject: string,
//     public salary: string
//   ) {
//     super(name);
//   }
// }

// hybrid
// mix  of all inheritance

// Polymorphism

// Polymorphism is the ability of objects to take on different forms or behave in different ways depending on the context in which they are used.

// .Compile Time Polymorphism
// .Run Time Polymorphism

//constructor overloading is the example of compile time polymorphism.function overloading is also the example of compile time polymorphism.
// Constructor Overloading
// class Student {
// Student(){}
// Student(pulic name:string){}
// }

//function overloading
// when we define multiple method with a same in a single but with different parameter this is called function overloading.not supported in typescript

// class Student {
//   private changeName() {}
//   private changeName(name: string) {}
// }

//Run time Polymorphism
// Function Overriding
// Parent and child both contain the same function with different implementation.The parent class function is said to be overridden.

// class Parent {
//   getInfo() {
//     console.log('parent class');
//   }
// }

// class Child extends Parent {
//   getInfo() {
//     console.log('Child Class');
//   }
// }

// let c1 = new Child()
// c1.getInfo()

// Another example of run time polymorphsim is virtual function
// Virtual Function
// A virtual function is a member function that you expect to be redefined in derived classes.
// virtual function are dynamic in nature
// Defined by keyword virtual inside a base class and are always declared with a base class and overridden in a child class.
// A virtual function is called during run time.

// class Parent {
//   getInfo() {
//     console.log('parent class');
//   }

// virtual hello(){
//   console.log('from parent class')
// }
// }

// class Child extends Parent {
//   getInfo() {
//     console.log('Child Class');
//   }
//   // hello(){
//   //   console.log('from parent class')
//   // }
// }

// let c1 = new Child()
// c1.getInfo()

// Abstraction
// hiding all unnecessuary details and showing only the important part.
// using abstract classes
// Abstract Classes are used to provide a base class from which other classes can be derived.
// They can't be instantiated and are meant to be inherited.
// Abstract classes are typically used to define an interface for derived classes.

// abstract class Shape {
//   abstract draw(): void;

//   circle() {
//     console.log('circle shape');
//   }
// }

// class Rectangle extends Shape {
//   draw(): void {
//     console.log('rectangle');
//   }
// }

// static keyword
// Static Variable
// Variables declared as static in a function are created & initialized once for the lifetime of the program.
// in function

// static variable in a class are created & initialized once. They are shared by all the object of the class.
//in class

//static object

// function staticFun(){
//   static x:number = 0
// }

// staticFun();
// staticFun()

class MyClass {
  static x: number = 0;

  incremet() {
    MyClass.x++;
    console.log(MyClass.x);
  }
}

let MyClass1 = new MyClass();
let MyClass2 = new MyClass();

MyClass1.incremet();
MyClass1.incremet();

MyClass2.incremet();
MyClass2.incremet();

//output will be 1,2,3,4
