//some dom properties and methods;
//selectors in Dom 
//template literals

//template literals -

// const str = 'Hari '
// const str1 = 'Prasath';
// const str2 =` My firstName is ${str} and my lastName is ${str1} `
// console.log(str2)


// const rsl = document.getElementById('result')

// rsl.innerHTML = `<h1>${str}</h1>
//                   <p>${str1}</p>
//                   <
// ` 


// const rsl = document.getElementById('result')
// console.log(rsl)

//multiple selectors;

// const cont = document.getElementsByTagName('input')

// console.log(cont)

// for(i=0 ; i<cont.length; i++){
//     cont[i].innerHTML = `<h1>Hello world</h1>`
// }

// cont.forEach(function(item){
//    item.innerHTML= '<h1>Hello</h1>'
// })


//querySelector, 

// const rsl1 =document.querySelectorAll('.container')

// console.log(rsl1)

// rsl1.forEach(function(item){
//     item.innerHTML='<h1>Hello world</h1>'

// })


const img = document.querySelector('img');

// img.src='https://images.unsplash.com/photo-1678737169917-4e19ce734b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60'

// img.setAttribute('src','https://images.unsplash.com/photo-1678737169917-4e19ce734b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60')


// img.setAttribute('alt','ImgLogo')

// img.style.height='200px'
// img.style.width='30%'
// img.style.borderRadius='8px'


// img.classList.add('active')

// img.classList.remove('active')

// img.addEventListener('click',function(){
//     img.classList.toggle('active')
// })
