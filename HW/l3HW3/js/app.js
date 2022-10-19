const btnopen = document.getElementById('btnprimary');
const btns = document.querySelector('.btns');

// console.log(readbtn)
const burger = document.querySelector('.burger');
const burgerbtn = document.querySelector('.burgerbtn');
// console.log(burgertext)


btnopen.addEventListener('click',()=>{
    btns.classList.toggle('show')
})

burgerbtn.addEventListener('click',()=>{
	// console.log('hay')
	burger.classList.toggle('show');
})



const fried = document.querySelector('.fried');
const friedbtn = document.querySelector('.friedbtn');


friedbtn.addEventListener('click',()=>{
	// console.log('hay')
	fried.classList.toggle('show');
})


const hotpot = document.querySelector('.hotpot');
const hotpotbtn = document.querySelector('.hotpotbtn');


hotpotbtn.addEventListener('click',()=>{
	// console.log('hay')
	hotpot.classList.toggle('show');
})


const ramen = document.querySelector('.ramen');
const ramenbtn = document.querySelector('.ramenbtn');


ramenbtn.addEventListener('click',()=>{
	// console.log('hay')
	ramen.classList.toggle('show');
})


const pizza = document.querySelector('.pizza');
const pizzabtn = document.querySelector('.pizzabtn');


pizzabtn.addEventListener('click',()=>{
	// console.log('hay')
	pizza.classList.toggle('show');
})





