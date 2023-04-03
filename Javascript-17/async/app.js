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
console.log(1)

setTimeout(function(){
  console.log('2')
  next()
  
},5000)


function next(){
    console.log(3)
}