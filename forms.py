from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, InputRequired


class GeolocatorForm(FlaskForm):
    address = StringField('Address', validators=[DataRequired()])
    submit = SubmitField('Submit')
