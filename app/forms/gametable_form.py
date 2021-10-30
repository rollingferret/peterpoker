from flask_wtf import FlaskForm
from wtforms.fields import (
    TextField, StringField, SubmitField
)
from wtforms.validators import DataRequired


class NewGameTable(FlaskForm):
    tableName = StringField("Table Name", [DataRequired()])
    submit = SubmitField("Post")