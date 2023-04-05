// oops - data and behaviour;
//bigger - smaller components

//

// const a = ()=>{
//     return "Hello"
// }

// console.log(a())

//callback functions- 
// function display(){
//     return 'Hello'
// }

// function createFun(a){
//   console.log(a())
// }

// createFun(display)

//
// function getFood(orderFood){
//   const food = orderFood;
// //   console.log(newFood)
//    return function eatFood(){
//       var newFood = 'bANANA'
//        return food
//   }
// }


// console.log(getFood('Pizza')())


// function sum(a){
//     const num = a;
//     return function multiply(b){
//       return num * b;
//     }
//   }

// const multiplyBy5 = sum(5);

// console.log(multiplyBy5(16))


// ASNYC - 



// function name(){

//     btn.addEventListener('click',function(){

//     })
// }

// debugger;
// console.log(1)

// setTimeout(function(){
//   console.log('2')
//   next()
  
// },5000)


// function next(){
//     console.log(3)
// }

// promises - async and await 

// how to informations from an api;



// console.log(data)

// const myPromise = new Promise((resolve,reject)=>{

// //producing code
// const data = fetch('https://api.escuelajs.co/api/v1/products')


//   resolve(data)

// })

// //comsumer code;


// myPromise
// .then((res)=>res.json())
// .then((data)=>console.log(data))

//async and await ;





// async function getData(){
//   const res =await fetch('https://api.escuelajs.co/api/v1/products');
//   const data =await res.json()

//   console.log(data)
// }
// getData();

// fetch('https://api.escuelajs.co/api/v1/products')
// .then((res)=>res.json())
// .then((data)=>console.log(data))


//ui - 