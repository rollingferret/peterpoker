from flask_wtf import FlaskForm
from wtforms.fields import (
    TextField, StringField, SubmitField
)
from wtforms.validators import DataRequired
from wtforms.validators import Length



class NewCommentForm(FlaskForm):
    commented_user_id = StringField("Commented Id", [DataRequired()])
    commenter_user_id = StringField("Commenter Id", [DataRequired()])
    content = TextField("Content", [DataRequired(), Length(min=1, max=100)])
    submit = SubmitField("Post")