// UI
// Start Nav
const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const navs =document.querySelectorAll('.nav');

openbtn.addEventListener('click',()=>{
	// console.log('open');

	navs.forEach((nav)=>nav.classList.add('visible'));
});

closebtn.addEventListener('click',()=>{
	// console.log('close');
	navs.forEach((nav)=>{
		nav.classList.remove('visible');
	})
});
// End Nav

// Price Section 
const checkbox = document.getElementById('toggle'),
	slider = document.getElementById('slider');

const basic = document.querySelector('.basic'),
	prof = document.querySelector('.prof'),
	master = document.querySelector('.master');

// Event Listener
slider.addEventListener('click',()=>{
	// console.log('hay')

	if(!checkbox.checked){
		//check win yin 
		basic.innerText = 45;
		prof.innerText = 105;
		master.innerText = 150;
	}else{
		// check ma win yin
		[basic.textContent,prof.textContent,master.textContent] = [3.99,9.99,14.99];
	}



});
// End Price Section 


// Noti 
const btnfail = document.getElementById('failbtn');
const btnsuccess = document.getElementById('successbtn');

const toasts = document.getElementById('toasts');

const messages = [
	'Message One',
	'Message Two',
	'Message Three',
	'Message Four',
	'Message Five'
];

// Successbtn 
btnsuccess.addEventListener('click',()=>createnotification('Purchase Successfully !','success'));

function createnotification(message,type){
	const notify = document.createElement('div');
    // console.log(notify)
	notify.classList.add('toastbtn');
	notify.classList.add(type ? type : "success")
	notify.innerText = message ? message: getrandommessage();
	console.log(notify);

	toasts.appendChild(notify);

	setTimeout(()=>{
		notify.remove();
	},3000);
}




// fail btn 
btnfail.addEventListener('click',()=>createnotification('Already Purchase Another Package !','danger'));

function createnotification(message,type){
	const notify = document.createElement('div');
    // console.log(notify)
	notify.classList.add('toastbtn');
	notify.classList.add(type ? type : "danger")
	notify.innerText = message ? message: getrandommessage();
	console.log(notify);

	toasts.appendChild(notify);

	setTimeout(()=>{
		notify.remove();
	},3000);
}

function  getrandommessage(){
	return messages[Math.floor(Math.random()*messages.length)];
}