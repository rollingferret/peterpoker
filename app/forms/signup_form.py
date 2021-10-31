from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from wtforms.validators import Length



def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists, Length(min=1, max=40)])
    email = StringField('email', validators=[DataRequired(), user_exists, Email(), Length(min=1, max=100)])
    password = StringField('password', validators=[DataRequired(), Length(min=6, max=100)])
    bio = StringField('bio')
    avatar_url = StringField('avatar_url')