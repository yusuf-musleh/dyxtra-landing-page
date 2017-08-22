
import os

from flask import Flask, render_template, request, session, redirect
from flask_mail import Mail

from werkzeug.contrib.fixers import ProxyFix

from functools import wraps
from helpers import send_email

app = Flask(__name__)
app.secret_key = os.environ['FLASK_SESSIONS_SECRET_KEY']

if os.environ.get('PRODUCTION'):
	app.config['DEBUG'] = False
	app.config['TESTING'] = False
else:
	app.config['DEBUG'] = True
	app.config['TESTING'] = True

app.config['TEMPLATES_AUTO_RELOAD'] = True

# configuring email
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ['DYXTRA_MAIL_USERNAME']
app.config['MAIL_PASSWORD'] = os.environ['DYXTRA_MAIL_PASSWORD']
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

app.wsgi_app = ProxyFix(app.wsgi_app)


# decorator to redirect all requests to go through https
def ssl_required(fn):
    @wraps(fn)
    def decorated_view(*args, **kwargs):
        if not (app.debug or app.testing):
            if request.is_secure:
                return fn(*args, **kwargs)
            else:
                return redirect(request.url.replace("http://", "https://"))

        return fn(*args, **kwargs)

    return decorated_view


@app.route('/', methods=['GET'])
@ssl_required
def index():
	return render_template('index.html')


@app.route('/pricing', methods=['GET'])
@ssl_required
def pricing():
	return render_template('pricing.html')


@app.route('/register', methods=['GET'])
@ssl_required
def register():
	selected_plan = request.args.get('selected_plan')
	session['selected_plan'] = selected_plan
	return render_template('register.html')


@app.route("/notify", methods=['POST'])
def notify():
	try:
		selected_plan = session.get('selected_plan')
		tilte = "New Signup"
		message = "{} signed up for ~ {} ~, you can contact him/her through {}".format(request.form['name'], selected_plan, request.form['email'])
		sender = os.environ['DYXTRA_MAIL_USERNAME']
		recipients = ['yusuf.musleh@gmail.com']
		send_email(mail, tilte, message, sender, recipients)
		return "Success", 200
	except:
		return "Fail", 400
