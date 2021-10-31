from flask_wtf import FlaskForm
from wtforms.fields import (
    TextField, StringField, SubmitField
)
from wtforms.validators import DataRequired
from wtforms.validators import Length


class EditCommentForm(FlaskForm):
    content = TextField("Content", [DataRequired(), Length(min=1, max=100)])
    submit = SubmitField("Edit")