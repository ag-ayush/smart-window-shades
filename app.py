from flask import Flask, render_template

""" Flask app """
app = Flask(__name__)


""" Base page, only page actually"""
@app.route("/")
def index():
    return render_template('index.html')


""" Run on 0.0.0.0 for public, and 8080 for openshift"""
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
