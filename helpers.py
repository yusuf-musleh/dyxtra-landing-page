from flask_mail import Message

def send_email(mail, title, message, sender, recipients):
	msg = Message(title, sender = sender, recipients = recipients)
	msg.body = message
	mail.send(msg)