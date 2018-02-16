# from flask import Flask, render_template
# app = Flask(__name__)
#
# @app.route("/")
# def main():
#     return render_template("index.html")
#
# if __name__ == "__main__":
#     app.run()

#!/usr/bin/python

from flask import Flask
import RPi.GPIO as GPIO


"""
Sets up the RPi lib to use the Broadcom pin mappings
for the pin names. This corresponds to the pin names
given in most documentation of the Pi header
"""
GPIO.setmode(GPIO.BCM)

"""
Turn off warnings that may crop up if you have the
GPIO pins exported for use via command line
"""
GPIO.setwarnings(False)

"""
Set GPIO2 as an output
"""
GPIO.setup(2, GPIO.OUT)

# Create an instance of flask called "app"
app = Flask(__name__)

# This is our default handler, if no path is given
@app.route("/")
def index():
    return "hello"

# The magic happens here. When some http request comes in with a path of
#  gpio/x/y, the Flask app will attempt to parse that as x=pin and y=level.
#  Note that there is no error handling here! Failure to properly specify the
#  route will result in a 404 error.
@app.route('/gpio/<string:id>/<string:level>')
def setPinLevel(id, level):
    GPIO.output(int(id), int(level))
    return "OK"

# If we're running this script directly, this portion executes. The Flask
#  instance runs with the given parameters. Note that the "host=0.0.0.0" part
#  is essential to telling the system that we want the app visible to the
#  outside world.
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)