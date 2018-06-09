//Make connection
var socket = io.connect('http://192.168.0.7:8080');

//creates a variable from the <button> in the index.html page with the id of "LED"
var LED = document.getElementById('LED');
//Creates a variable from the <p> element located in the index.html page with the id of "state"
var state = document.getElementById('state');



LED.addEventListener("click", function(){
	socket.emit('LedState')
});

socket.on('state', function(){
	if(state.innerHTML == "Off"){
	state.innerHTML = "On";
	LED.style.backgroundColor = "green";
	} else {
		state.innerHTML = "Off"
		LED.style.backgroundColor = "red";
	}
})

