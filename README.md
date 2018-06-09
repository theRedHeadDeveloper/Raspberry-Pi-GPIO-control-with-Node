# Raspberry-Pi-GPIO-control-with-Node
This is a Node.js application that controls the output of GPIO pin 7 on the Raspberry Pi 3 Model B.



# After downloading the repository enter the following commands in the your Raspeberrry Pi's console.
1. npm init 
2. npm install express 
3. npm install epoll
4. npm install rpi-gpio
5. npm install socket.io



# Set configure the client.js file.
In order for socket.io to establish a connection, you must add the IP address of your Raspberry Pi followed by the port number used to host the website (in this case I used port 8080).
