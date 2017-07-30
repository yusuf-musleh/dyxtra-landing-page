from flask import Flask, render_template
app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/', methods=['GET'])
def index():
	return render_template('index.html')


@app.route('/pricing', methods=['GET'])
def pricing():
	return render_template('pricing.html')


@app.route('/register', methods=['GET'])
def register():
	return render_template('register.html')