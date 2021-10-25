from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .table import players_game
from datetime import datetime


follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("followed_id", db.Integer, db.ForeignKey("users.id"))
)

# players_game = db.Table(
#     "players_game",
#     db.Column(
#         "game_id", 
#         db.Integer, 
#         db.ForeignKey("gametables.id"), 
#         primary_key=True
#     ),
#     db.Column(
#         "player_id", 
#         db.Integer, 
#         db.ForeignKey("users.id"), 
#         primary_key=True
#     )
# )

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    bio = db.Column(db.String(255), nullable=True)
    avatar_url = db.Column(db.String(255), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    currentSimoleans = db.Column(db.Integer, nullable=True, default=0)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    gametables = db.relationship(
        "GameTable", 
        secondary=players_game, 
        back_populates="players"
    )

    # tables = db.relationship(
    #     'Table', back_populates='user')
    
    # seat1 = db.relationship(
    #     'GameTable', back_populates='seat1')

    # seat2 = db.relationship(
    #     'GameTable', back_populates='seat2')


    createdtables = db.relationship("GameTable", back_populates="table_owner")


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
            'avatar_url': self.avatar_url,
            'currentSimoleans': self.currentSimoleans,
            'followers': [follower.id for follower in self.followers],
            'following': [following.id for following in self.following],
            'gametables': [gametable.id for gametable in self.gametables],
            # 'table_ids': [table.id for table in self.tables]
        }
