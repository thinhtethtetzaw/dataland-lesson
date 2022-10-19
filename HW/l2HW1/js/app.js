// UI
// hidden search 
const searchel = document.querySelector(".search"),
		inputel = document.querySelector(".hiddeninput"),
		btnel = document.querySelector(".hiddenbtn");

btnel.addEventListener('click',()=>{
	// console.log('hay');

	searchel.classList.toggle('active');


	// for ready cursor
	inputel.focus();

});
// end hidden search 

// start autocount 
// UI
const counters = document.querySelectorAll('.counter');
// console.log(counters);	//node list nk hwet lr ml
counters.forEach((counter)=>{
	// console.log(counter);
	counter.innerText = "0";

	// console.log(counter.getAttribute('data-target'));


	// function ko ta khr htl looping pat pyy ml

	const updatecounter = ()=>{

		const target = Number(counter.getAttribute('data-target'));
		// console.log(typeof target);

		const ctr = +counter.innerText;		//comparison lote chin loh number type chng
		// console.log(typeof ctr);

		const increment = target/30;		//120 ka ny sa pee toe twrr ml 100 nk srr yin
		// console.log(increment);

		if(ctr < target){
			counter.innerText = `${Math.ceil(ctr + increment)}`;		//120 ka sa p 120 c toe twrr ml
			setTimeout(updatecounter,50);		//first hr pyn hwet p nout hr twy win lr mr moh settimeout
		}
	}

	updatecounter();



});
// end auto count 

//Auto text
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = "Welcome to our online shopping. As a special treat for new customers, enjoy 15% off your first time purchase";
// console.log(pgh.length);	//string character array


// start point lyy u 
let idx = 1;	//L lo lo chin loh length 1 ka ny sa u
let speed = 1000;

function autotext(){
	// console.log('hay');

	textel.innerText = pgh.slice(0,idx);

	// idx += 1;
	idx++

	if(idx > pgh.length){
		idx = 1;
	}

	setTimeout(autotext,speed)
}
autotext();

// Event Listener
speedel.addEventListener('input',()=>{
	// console.log('hay');
	// console.log(speedel.value);

	speed = 100/speedel.value;
})