from flask import render_template, redirect, Flask
import RPi.GPIO as GPIO
import time

"""
Sets up the RPi lib to use the Board mappings
"""
GPIO.setmode(GPIO.BOARD)

"""
Turn off warnings that may crop up if you have the
GPIO pins exported for use via command line
"""
GPIO.setwarnings(False)

"""
Stepper motor pins setup
"""
DIRECTION_PIN = 38
STEP_PIN = 37
GPIO.setup(DIRECTION_PIN, GPIO.OUT)
GPIO.setup(STEP_PIN, GPIO.OUT)

"""
Always starts up completely
"""
global CURRENT
CURRENT = 0

# Create an instance of flask called "app"
app = Flask(__name__)

# This is our default handler, if no path is given
@app.route("/")
def index():
    # return "hello"
    return render_template('index.html')


@app.route('/gpio/<string:percent>/')
def setPinLevel2(percent):
    if int(percent) > 100:
        percent = "100"
    elif int(percent) < 0:
        percent = "0"

    global CURRENT
    output_percentage = CURRENT - int(percent)
    CURRENT = int(percent)

    if output_percentage < 0:
        print("UP")
        GPIO.output(DIRECTION_PIN, True)
    else:
        print("DOWN")
        GPIO.output(DIRECTION_PIN, False)

    motor_output(output_percentage)
    return redirect('https://shades.csh.rit.edu')


def percentage_to_steps(percent):
    #TODO: Change to number of steps for curtain to go from 0 to 100
    FULL_REV_STEPS = 200
    percent = abs(percent)
    return int(FULL_REV_STEPS*(percent/100.0))


def motor_output(percent):
    steps = percentage_to_steps(percent)
    # track the number of steps taken
    StepCounter = 0
    # wait time controls speed
    WaitTime = 0.001

    # 200 Steps = 1 Revolution
    while StepCounter < steps:
        # turning the gpio on and off tells the easy driver to take one step
        GPIO.output(STEP_PIN, True)
        GPIO.output(STEP_PIN, False)
        StepCounter += 1

        # Wait before taking the next step...this controls rotation speed
        time.sleep(WaitTime)

# If we're running this script directly, this portion executes. The Flask
#  instance runs with the given parameters. Note that the "host=0.0.0.0" part
#  is essential to telling the system that we want the app visible to the
#  outside world.
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
    # app.run()
