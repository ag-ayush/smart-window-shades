# Smart Window Shades (IOT)

Smart Shades is a web service that allows one to control window shades using a website. The hardware requirement is a Raspberry Pi(connected to the internet), Stepper Motor, Housing for stepper motor (3D printed), Stepper Motor Driver (I used the Pololu A4988), 10K Ohm Resistor, and a domain. The application uses python, Flask, OpenShift in the back end, Bootstrap, JavaScript, and Ajax. In short, there are two Flask apps running, one on [shades.csh.rit.edu](shades.csh.rit.edu) and one on the Pi. The flask app on CSH website has the JavaScript and Ajax to make POST requests to the Flask app on the Pi, which can then take care of changing the shades.

# Wiring
* Refer to [Minimal wiring diagram](https://www.google.com/search?q=minimal+wiring+diagram+stepper+motor)
for your stepper driver ([Pololu A4988](https://www.pololu.com/product/1182)).

* In A4988, VMOT and GND connect to an external power supply for the motor. 

* This is followed by 2B, 2A, 1A, 1B which are pairs of wires corresponding to the motor's 4 wires.

* VDD and GND for the chip connect to the Raspberry Pi. VDD connects to 5v power supply, while
GND connects to ground. A GPIO diagram, such as that for 
[Raspberry Pi Model B+](pi4j.com/pins/model-b-plus.html) can be very helpful here.

* Note: You may need to set the current limit on your Stepper Motor Driver.

# Requirements
* [Flask](http://flask.pocoo.org/) and [flask-cors](https://pypi.python.org/pypi/Flask-Cors) are required to run this project, which also means you will need Python and pip.
* A raspberry pi is also required to be able to run this project.

# Post Notes
* I recommend using [sshfs](https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh) when developing using Raspberry Pi as it makes life much easier and developing much quicker.


For more information regarding the story behind this please check out the [this blog post](https://blog.csh.rit.edu/).
