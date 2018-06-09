//requires neseccary packages
var express = require('express');
var socket = require('socket.io');
var gpio = require('rpi-gpio');
var gpiop = gpio.promise

//sets the default value for pin 7 to LOW
gpiop.setup(7, gpio.DIR_OUT)
	.then(() => {
		return gpiop.write(7, false)
	})
	.catch((err) => {
		console.log('Error: ' , err.toString())
	})

var pin7 = false;

// APP SETUP
var app = express();
//creates server on port 8080 and assigns it to a variable that will be used as a socket parameter
var server = app.listen(8080, function(){
    console.log('listening for requests on port 8080,');
});



// STATIC FILES
//displays the index.html file in the browser
app.use(express.static('public'));



// SOCKET SETUP AND PASS SERVER
//creates a variable from the socket() function with the server variable passed to the function
var io = socket(server);
//runs the call back function when the connection is made with the client
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    //code that runs when 'LedState' is send from the client
    socket.on('LedState', function(){
    	console.log("button pushed");
    	//emits the 'LedState' to all clients
    	io.sockets.emit('state');
    	//add code to control GPIO pins

	if(pin7 == false){
             var gpiop = gpio.promise;
 
             gpiop.setup(7, gpio.DIR_OUT)
               .then(() => {
                   return gpiop.write(7, true)
               })
               .catch((err) => {
                   console.log('Error: ', err.toString())
               })
		pin7 = true;
	} else {
            var gpiop = gpio.promise;
 
             gpiop.setup(7, gpio.DIR_OUT)
               .then(() => {
                   return gpiop.write(7, false)
               })
               .catch((err) => {
                   console.log('Error: ', err.toString())
               })
		pin7 = false;
	}

    });
});




