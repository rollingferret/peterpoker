from flask_wtf import FlaskForm
from wtforms.fields import (
    TextField, StringField, SubmitField
)
from wtforms.validators import DataRequired


class NewCommentForm(FlaskForm):
    user_id = StringField("User Id", [DataRequired()])
    content = TextField("Content", [DataRequired()])
    submit = SubmitField("Post")