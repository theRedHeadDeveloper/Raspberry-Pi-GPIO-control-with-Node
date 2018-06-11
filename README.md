# Raspberry-Pi-GPIO-control-with-Node
This is a Node.js application that controls an LED connected to GPIO pin 7 on the Raspberry Pi 3 Model B.



# After downloading the repository, enter the following commands in the your Raspeberrry Pi's console.
1. npm install express 
2. npm install epoll
3. npm install rpi-gpio
4. npm install socket.io



# Configure the client.js file.
In order for socket.io to establish a connection, you must add the IP address of your Raspberry Pi followed by the port number used to host the website (in this case I used port 8080).



# Launch the Node application.
Once you have installed all of the necessary modules and have configured the client.js file, the program is ready to run.
In the command line, go to the directory that you have stored the repository and enter the following command

sudo node app
