//your JS code here. If required.
let count = 0;

const counter = document.getElementById("counter");

const button = document.getElementById("incrementBtn");

button.addEventListner("click", function (){
	alert(count);
	count++;
	counter.textContent = count;
})