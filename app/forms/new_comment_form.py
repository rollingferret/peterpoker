from flask_wtf import FlaskForm
from wtforms.fields import (
    TextField, StringField, SubmitField
)
from wtforms.validators import DataRequired


class NewCommentForm(FlaskForm):
    commented_user_id = StringField("Commented Id", [DataRequired()])
    commenter_user_id = StringField("Commenter Id", [DataRequired()])
    content = TextField("Content", [DataRequired()])
    submit = SubmitField("Post")