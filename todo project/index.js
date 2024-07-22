console.log('Test 1 passed')
function addTodo() {
	const todo = []
	let input = document.getElementById('todo-Namer')
	todo.push(input.value)
	for (let i=0; i<todo.length;  i++) {
		document.getElementById('todoArea').innerHTML+= '<li>'+ todo[i] + '</li>'  + '<br>'
		console.log('Test 2 passed');
	}
	/*const inputEl = document.getElementById('todo-Namer').textContent = ' '
	console.log('Test 3 passed');*/
}


function clearTodo() {
	document.getElementById('todoArea').innerHTML="<br>"
	console.log('Test 4 passed');
}