# Smart Curtain
IOT/Smart Window Shades

# Wiring
* Refer to [Minimal wiring diagram](https://www.google.com/search?q=minimal+wiring+diagram+stepper+motor)
for your stepper driver ([Pololu A4988](https://www.pololu.com/product/1182)).

* In A4988, VMOT and GND connect to an external power supply for the motor. 

* This is followed by 2B, 2A, 1A, 1B which are pairs of wires corresponding to the motor's 4 wires.

* VDD and GND for the chip connect to the Raspberry Pi. VDD connects to 5v power supply, while
GND connects to ground. A GPIO diagram, such as that for 
[Raspberry Pi Model B+](pi4j.com/pins/model-b-plus.html) can be very helpful here.

* Note: You may need to set the current limit on your Stepper Motor Driver.

# Some required packages
* python-dev
* python-pip
* pip ipython
* pip RPi.GPIO
* pip flask-cors