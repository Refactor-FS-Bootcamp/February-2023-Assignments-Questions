//Es6 - 2015 Ecma Script - 

//objects - 

// const obj = {
//     name:'nandy',
//     age: 23,

//     details:function(){
//        return this.name + " "+this.age;
//     }
// }

// // console.log(obj.details())


// const obj1 = {
//     name:'Hari',
//     age: 23,

//     details:function(){
//        return this.name + " "+this.age;
//     }
// }

// console.log(obj1)
// console.log(obj)

//2 issues - repeatation and memory.

//factory function - contructor function - class


// function createObj(a,b){
//     return  {
//        name:a ,
//        age: b,
//        details:function(){
//         return this.name + ' '+this.age
//        }
//     }
// }

// const person = createObj('Vikram',56);
// const person1 = createObj('Hari',58);


// console.log(person)
// console.log(person1)



// function Person (name, age){
//     // console.log(this)
//     this.name  = name;
//     this.age  = age;
// }

// Person.prototype.details = function(){
//     return this.name + " "+ this.age;
// }

// //prototype

// const person1 = new Person('Hari','56');
// const person2 = new Person('sABARI','56');


// console.log(person1.details())
// console.log(person2.details())



// const str = 'Hhh'

// const obj3 = {

// }


// obj3.name = 'vikram'
// obj3.age = '25'

// console.log(obj3)


//class - sytax for prototype inheritence:

// class Person {
//     constructor(name,age){
//         this.name =name;
//         this.age = age
//     }

//     details(){
//         return this.name;
//     }


// }

// const person1 = new Person('Nabendu',39);

// console.log(person1.details())


// class Employee extends Person{
//   constructor(name,age,exper){
//     super(name,age);
//     this.exper = exper
//   }

//   greets(){
//     return this.name +" "+ "welcome"
//   }

// }

// const Employee1 = new Employee('Hari',39,8);
// console.log(Employee1)


//Hoisting; - var - function declation methods:

//it will move the varible and function to top pages;

//variables are partially hoisted - function fully hoisted.

// console.log(a)


// var a = 10;

// console.log(a)

// var  a;
// console.log(a)




// a=undefined;
//console.log(a) -- undefined.
//a=10;
//console.log(a) -- 10

// var a =20;
// var a =20;

// console.log(parse())

// function parse(){
//     return "HAI"
// }

// console.log(a())

// var a = undefined;


//template literals;

// `${}`

//ternor opertors;

// if(0){
//     console.log('hello')
// }else{
//     console.log('hI')
// }

//  conditon ?  :

// 4<8 ? console.log('sdbj'):console.log('bye')





//object literals;
//arrow functions;
//

//object literals:
// let name = 'fName'
// let a ='Hari';

// const obj = {
//     "n ame":'Hello',
//     a,
//   [name]:'Nabendu',

//     details(){
//         return this.name;
//     }
// }

// console.log(obj["n ame"])

// console.log(obj)


// function hello(a){
   
// }

// hello(a)


//arrow function;

// const a = (num,num1) => {

// } num*3

// console.log(a(4,0))

//IIFE;

//global vairblae - it access all over;

//
// (function varib(){
//     let a = 10;

//    console.log(a)

// })()


// this.arrow function

// const a = ()=>{
//     console.log(this)
// }

// a()

// var obj = {
    

//     // details(){
//     //     return this.name
//     // }
// }

// console.log(obj.details())

//destructing - rest, spreed;





