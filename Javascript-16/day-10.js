// "use strict";
// function create(){
//     return this
// }
 

// console.log(create())

// dynamic scope - Based on where they are invoked or excuted or called depends on that the scope is determined.

// this - keyword

//this - substitue for an object.

//where the this key word in invoked depends upon that the object

//this- is refers to an object that the function is property of.

//function - global - obj - eventlistener.

// var aaaa= 1;
// function create1(){
//     console.log(this.aaaa) 
// }

// create1()

// console.log(aaaa)


// var obj = {
//     name:'Harry',


//     details:function(){
//         return 'welcome '+this.name
//     }
// }
// var obj3 = {
//     name:'Stella',


//     details:function(){
//         return   'welcome '+this.name
//     }
// }
// var obj2 = {
//     name:'Marry',


//     details:function(){
//         return this.name
//     }
// }



// console.log(obj.details())
// console.log(obj2.details())
// console.log(obj3.details())


// const btn = document.querySelectorAll(".btn")

// btn.forEach(function(btn){

//     // console.log(this)
//     // console.log(btn)
//     btn.addEventListener('click',function(){
//        this.style.backgroundColor='red'
//     })
// })

//homework *****
//this keyword

