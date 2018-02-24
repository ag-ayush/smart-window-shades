"""
setup

author: ayush goel
"""
import RPi.GPIO as GPIO
from time import sleep
GPIO.setmode(GPIO.BOARD)


"""
Brightness is controlled via PWM
"""
GPIO.setup(33, GPIO.OUT, initial=1)
p = GPIO.PWM(33, 1000)
p.start(0)
p.ChangeDutyCycle(25)
sleep(2)
p.ChangeDutyCycle(100)
sleep(2)
p.stop()


"""
LEDs are just on or off
"""
# chan_list = [15, 16]
# GPIO.setup(chan_list, GPIO.OUT, initial=GPIO.LOW)

# print("Starting 15, for 2 seconds")
# GPIO.(15, GPIO.HIGH)
# sleep(2)
# GPIO.output(15, 0)
# print("Starting 16, for 2 seconds")
# GPIO.output(16, GPIO.HIGH)
# sleep(2)
# GPIO.output(16, 0)

"""
Clean up the channels
"""
GPIO.cleanup()
