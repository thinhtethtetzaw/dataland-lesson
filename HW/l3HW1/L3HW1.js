const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');

password.addEventListener('input',(e)=>{
	const input = e.target.value;
	// console.log(input)
	const inlength = input.length;
	// console.log(inlength)

	const blurvalue = 20 - inlength*2;
	// console.log(blurvalue);

	background.style.filter = `blur(${blurvalue}px)`;
})

eyeicon.addEventListener('click',()=>{
	if(eyeicon.classList.contains('fa-eye')){
		eyeicon.classList.replace('fa-eye','fa-eye-slash');
		password.setAttribute('type','text');
	}else{
		eyeicon.classList.replace('fa-eye-slash','fa-eye');
		password.setAttribute('type','password');
	}
})

const toggle = document.getElementById('toggle');
const modal = document.getElementById('modal-container');

toggle.addEventListener('click',()=>{
	modal.classList.add('showmodal');
	toggle.classList.add('hidetoggle');
});