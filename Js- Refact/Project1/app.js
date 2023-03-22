// console.log('Hello world')
//flow 
//get the value in the input tag
//store it in the local storage
//and update the Ui with the new data
//add functionality for the delete

// localStorage.setItem('name1','hello');

// const getName = localStorage.getItem('name');

// console.log(getName)

const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    const name = document.querySelectorAll('input')[0]
    const email = document.querySelectorAll('input')[1]
    
    const nameValue = name.value;
    const emailValue = email.value;
   const Student = localStorage.getItem('Student')


   if(Student === ''){
      studentData =[]
   }else{
     studentData = JSON.parse(Student)
     console.log(studentData)
   }






    const itemObj = {
        sName:nameValue,
        sEmail:emailValue,
    }
   
    studentData.push(itemObj)

    localStorage.setItem('Student',JSON.stringify( studentData) )


   
})


//displpy

// [{}]