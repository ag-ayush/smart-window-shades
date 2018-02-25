from flask import Flask
from flask import render_template

# Create an instance of flask called "app"
app = Flask(__name__)

# This is our default handler, if no path is given
@app.route("/")
def index():
    # return "hello"
    return render_template('index.html')


if __name__ == "__main__":
    app.run(port=8080)
