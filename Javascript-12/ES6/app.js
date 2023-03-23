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



