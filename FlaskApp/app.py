from flask import Flask
from flask import render_template
import RPi.GPIO as GPIO
import time


"""
Sets up the RPi lib to use the Broadcom pin mappings
for the pin names. This corresponds to the pin names
given in most documentation of the Pi header
"""
GPIO.setmode(GPIO.BOARD)

"""
Turn off warnings that may crop up if you have the
GPIO pins exported for use via command line
"""
GPIO.setwarnings(False)

GPIO.setup(33, GPIO.OUT, initial=1)
p = GPIO.PWM(33, 1000)
p.start(0)

# Create an instance of flask called "app"
app = Flask(__name__)

# This is our default handler, if no path is given
@app.route("/")
def index():
    # return "hello"
    return render_template('index.html')

# The magic happens here. When some http request comes in with a path of
#  gpio/x/y, the Flask app will attempt to parse that as x=pin and y=level.
#  Note that there is no error handling here! Failure to properly specify the
#  route will result in a 404 error.
# @app.route('/gpio/<string:id>/<string:level>')
# def setPinLevel(id, level):
#     GPIO.output(int(id), int(level))
#     return "OK"

@app.route('/gpio/<string:percent>/')
def setPinLevel2(percent):
    print("Setting 33 to " + percent + "%")
    # GPIO.output(33, percent)
    p.ChangeDutyCycle(float(percent))
    time.sleep(1)
    return render_template('index.html')

# If we're running this script directly, this portion executes. The Flask
#  instance runs with the given parameters. Note that the "host=0.0.0.0" part
#  is essential to telling the system that we want the app visible to the
#  outside world.
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)