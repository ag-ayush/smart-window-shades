# This program expects two arguments: direction and steps
# Example usage: sudo python easy_stepper.py left 1600
# The above example would turn a 200 step motor one full revolution as by
# default the easy driver 4.4 is in 1/8 microstep mode. However the stepper driver
# selected by gtaagii will default to one full step per step pulse, microstepping can
# be selected if desired.
# ------------------------------------------------------------------------
# ------------------------------------------------------------------------

# Step 1: Import necessary libraries
# ------------------------------------------------------------------------
# ------------------------------------------------------------------------
import sys
import RPi.GPIO as gpio
import time

DIRECTION_PIN = 38
STEP_PIN = 37

try:
    direction = sys.argv[1]
    steps = int(float(sys.argv[2]))
except:
    steps = 0

# print which direction and how many steps
print("You told me to turn %s %s steps.") % (direction, steps)


gpio.setmode(gpio.BOARD)
gpio.setup(DIRECTION_PIN, gpio.OUT)
gpio.setup(STEP_PIN, gpio.OUT)
# time.sleep(1)

if direction == 'left':
    print("LEFT")
    gpio.output(DIRECTION_PIN, True)
elif direction == 'right':
    print("RIGHT")
    gpio.output(DIRECTION_PIN, False)


# track the number of steps taken
StepCounter = 0
# wait time controls speed
WaitTime = 0.001

# 200 Steps = 1 Revolution
while StepCounter < steps:
    # turning the gpio on and off tells the easy driver to take one step
    gpio.output(STEP_PIN, True)
    gpio.output(STEP_PIN, False)
    StepCounter += 1

    # Wait before taking the next step...this controls rotation speed
    time.sleep(WaitTime)

# relase the GPIO
gpio.output(STEP_PIN, False)
gpio.cleanup()
