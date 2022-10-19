// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem("todos"));		




if(todos){
	todos.forEach(todo => addtodo(todo));
}

// Event Listener
formel.addEventListener('submit',(e)=>{
	// console.log('hay');

	addtodo();
	e.preventDefault();

});


// addtodo
function addtodo(todo){
	// console.log("i am working");

	let todotext = inputel.value;
	// console.log(todotext);


	if(todo){
		todotext = todo.text; 	
	}

	if(todotext){
		const li = document.createElement('li');



		if(todo && todo.complete){
			// add class
			li.classList.add('completed');
		}




		li.appendChild(document.createTextNode(todotext));
		// console.log(li);
		todoul.appendChild(li);	
		inputel.value = "";	

		// add to local storage
		updatelocalstorage();

		// add line through
		li.addEventListener('click',()=>{
			li.classList.toggle('completed');
			updatelocalstorage();

		});

		// remove by right click
		li.addEventListener('contextmenu',(e)=>{
			// console.log('i am working');
			li.remove();
			updatelocalstorage();
			e.preventDefault();

		});

		
	}else{
		window.alert('Enter Your Todo');
	}


}


function updatelocalstorage(){
	// console.log("storage ready");

	let todolis = document.querySelectorAll('li');	
	// console.log(todolis);

	let todos = [];	

	todolis.forEach(todoli=>{
		// console.log(todoli);
		// console.log(todoli.innerText);



		
		todos.push({
			//key:value
			text:todoli.innerText,
			complete:todoli.classList.contains('completed') 	
		});


	});

	// console.log(todos);
						// key
	localStorage.setItem('todos',JSON.stringify(todos));	
}