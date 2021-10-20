from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("followed_id", db.Integer, db.ForeignKey("users.id"))
)
class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    bio = db.Column(db.String(255), nullable=True)
    avatar_url = db.Column(db.String(255), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    currentSimoleans = db.Column(db.Integer, nullable=False, default=0)

    tables = db.relationship(
        'Table', back_populates='user')
    
    seat1 = db.relationship(
        'Table', foreign_keys=seat1, back_populates='seat1')

    seat2 = db.relationship(
        'Table', foreign_keys=seat2, back_populates='seat2')

    seat3 = db.relationship(
        'Table', foreign_keys=seat3, back_populates='seat3')

    seat4 = db.relationship(
        'Table', foreign_keys=seat4, back_populates='seat4')

    seat5 = db.relationship(
        'Table', foreign_keys=seat5, back_populates='seat5')

    seat6 = db.relationship(
        'Table', foreign_keys=seat6, back_populates='seat6')

    seat7 = db.relationship(
        'Table', foreign_keys=seat7, back_populates='seat7')

    seat8 = db.relationship(
        'Table', foreign_keys=seat8, back_populates='seat8')

    seat9 = db.relationship(
        'Table', foreign_keys=seat9, back_populates='seat9')

    seat10 = db.relationship(
        'Table', foreign_keys=seat10, back_populates='seat10')

    gamelogs = db.relationship(
        'GameLog', back_populates='user')

    followers = db.relationship(
    "User",
    secondary=follows,
    primaryjoin=(follows.c.followed_id == id),
    secondaryjoin=(follows.c.follower_id == id),
    backref=db.backref("following", lazy="dynamic"),
    lazy="dynamic"
)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'bio': self.bio,
            'profile_url': self.avatar_url,
            'followers': [follower.id for follower in self.followers],
            'following': [following.id for following in self.following],
            'table_ids': [table.id for table in self.tables]
        }
