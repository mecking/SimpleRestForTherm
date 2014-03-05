SimpleRestForTherm
==================

It's a minimalist rest API to test a temperature sensor with my raspberry pi

pi@raspberrypi ~/code $ git clone https://github.com/mecking/SimpleRestForTherm.git  
Cloning into 'SimpleRestForTherm'...  
remote: Counting objects: 11, done.  
remote: Compressing objects: 100% (8/8), done.  
remote: Total 11 (delta 2), reused 8 (delta 2)  
Unpacking objects: 100% (11/11), done.

pi@raspberrypi ~/code $ cd SimpleRestForTherm/

pi@raspberrypi ~/code/SimpleRestForTherm $ npm install

pi@raspberrypi ~/code/SimpleRestForTherm $ sudo modprobe w1-gpio

pi@raspberrypi ~/code/SimpleRestForTherm $ sudo modprobe w1-therm

pi@raspberrypi ~/code/SimpleRestForTherm $ node server.js 
Listening on port 3000

pi@raspberrypi ~/code/SimpleRestForTherm $ curl -s 127.0.0.1:3000/sensor  
{"temperature":27.437}
