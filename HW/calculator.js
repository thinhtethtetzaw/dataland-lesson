const inputel = document.getElementById('showvalue');


function reset(re){
	// document.getElementById('showvalue').value = "";
	inputel.value = "";

	// console.log(btn);	

};


function display(value){
	// document.getElementById("showvalue").value += value;
	inputel.value += value;
}

function calculate(){
	// let p = document.getElementById("showvalue").value;
	// let q = eval(p);
	// document.getElementById("showvalue").value = q;

	inputel.value = eval(inputel.value);
}
function del(){
	let value = inputel.value;
	value = value.slice(0, value.length - 1);
	inputel.value = value;


}
