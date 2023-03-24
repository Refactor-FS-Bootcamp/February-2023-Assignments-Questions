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
displayData()
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
    //  console.log(studentData)
   }






    const itemObj = {
        sName:nameValue,
        sEmail:emailValue,
    }

    if (nameValue === '' || emailValue === ''){
      alert('Please enter a valid input')
    }else{
      studentData.push(itemObj)
    }
   
    

    localStorage.setItem('Student',JSON.stringify( studentData) )

    name.value=''
    email.value=''
   displayData()
})

function displayData(){
  let studentInfo = localStorage.getItem('Student')
   const tableUi = document.querySelector('tbody')

   let DataUi = ' '


   if(studentInfo === ''){
    studentArr= []
   }else{
      studentArr = JSON.parse(studentInfo)
    
   }


   studentArr.forEach(function(value,index){
      DataUi +=`
      <tr>
      <td>${index +1}</td>
      <td>${value.sName}</td>
      <td>${value.sEmail}</td>
      <td>
      <button class='deleteBtn'
      type="submit">delete</button>
      </td>
    </tr>  
      `
   });


  //  console.log(DataUi)
   if(studentArr.length !=0){
    tableUi.innerHTML =DataUi
    // DataUi=''
    console.log(DataUi)
   }else{
    // alert('Pleae enter something')
   }

   deleteStudent()
 
}

function deleteStudent(){
   const deleteBtn = document.querySelectorAll('.deleteBtn');

  deleteBtn.forEach(function(dBtn){
    dBtn.addEventListener('click',function(){
      // dBtn.innerHTML ='Done'
      dBtn.parentNode.parentNode.style.textDecoration ='line-through'
      // console.log()
    })
  })
}



// localStorage

//fetch index
//use array methods.
//create new updated array-
//repalce the old with new arry in locastorge
//run the display function to update the Ui.




