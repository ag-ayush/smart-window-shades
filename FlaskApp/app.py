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

"""
Set channel 15 and 16 to output
"""
chan_list = [15, 16]
GPIO.setup(chan_list, GPIO.OUT, initial=GPIO.LOW)

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

@app.route('/gpio/<string:id>/')
def setPinLevel2(id):
    print("Setting " + id + " to high for 2 seconds!")
    GPIO.output(int(id), GPIO.HIGH)
    time.sleep(2)
    GPIO.output(int(id), GPIO.LOW)
    return render_template('index.html')

# If we're running this script directly, this portion executes. The Flask
#  instance runs with the given parameters. Note that the "host=0.0.0.0" part
#  is essential to telling the system that we want the app visible to the
#  outside world.
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)