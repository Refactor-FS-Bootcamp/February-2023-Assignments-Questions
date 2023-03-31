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
//api - 

//desturcting - 

// const arr = ['Kiwi','orange','banana','Mango'];

// console.log(arr[1])

// const fruit1 = arr[0];
// console.log(fruit1)
// const fruit2 = arr[1];
// console.log(fruit2)
// const fruit3 = arr[2];
// console.log(fruit3)
// const fruit4 = arr[3];
// console.log(fruit4)

// const  [fru1,,fru2,fru3]  = arr

// console.log(fru1,fru2,fru3)


// function freshFruits([fru1,,fur2,fru3]){
//     return 'FreshFruits '+fru3
// }

// console.log(freshFruits(arr))


//destructure an object:

// const person = {
//     name:'John',
//     age:34,

//     details(){
//         return this.name;
//     }
// }

// const   {name:fName,age,details}   = person
// var name='john'

// const details  = function(){
//     return this.name
// }

// const fName = name;
// console.log(fName)
// console.log(details())





// function greet({name,age}){
//     console.log(arguments)
//     // const {name,age}=person
//     return 'Congratulations '+name 
// }

// console.log(greet(person))


//rest , spreed operator - ...

// const arr = [1,2,3,4]

// console.log(...arr)

// const obj = {
//     name:'John',
//     eyeColor :'Grey'
// }
// const obj3 = {
//     AGE:'35',
//     eyeColor :'Yellow'
// }
// // console.log(...obj)

// const obj2 ={...obj3,...obj}
// console.log(obj2)

// const arr = [1,2,3,4,5]

// // console.log(...arr)
// const [num,num1,num2,...num3]=arr;

// console.log(num,num1,num2,num3)

//api - 

//server - nodejs - database;

//url - www.example.com/


// ui - pay - raz - sever - -ur server - ui.


