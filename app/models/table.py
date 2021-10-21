from .db import db
# from .user import players_game

players_game = db.Table(
    "players_game",
    db.Column(
        "game_id", 
        db.Integer, 
        db.ForeignKey("gametables.id"), 
        primary_key=True
    ),
    db.Column(
        "player_id",
        db.Integer, 
        db.ForeignKey("users.id"), 
        primary_key=True
    )
)

class GameTable(db.Model):
    __tablename__ = 'gametables'

    id = db.Column(db.Integer, primary_key=True)
    tableName = db.Column(db.String(255), nullable=True)
    # seat_1 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)

    currentTurn = db.Column(db.Integer, nullable=False)
    isActive = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relationships

    players = db.relationship(
        "User", 
        secondary=players_game,
        back_populates="gametables"
    )

    # seat1 = db.relationship('User', back_populates='seat1', foreign_keys=[seat_1])
    # seat2 = db.relationship('User', back_populates='seat2', foreign_keys=[seat_2])

    # user = db.relationship('User', back_populates='tables')


    def to_dict(self):
        return {
            'id': self.id,
            'tableName': self.tableName,
            # 'seat1': self.seat1.to_dict(),
            # 'seat2': self.seat2.to_dict(),
            # 'seat3': self.seat3.to_dict(),
            # 'seat4': self.seat4.to_dict(),
            # 'seat5': self.seat5.to_dict(),
            # 'seat6': self.seat6.to_dict(),
            # 'seat7': self.seat7.to_dict(),
            # 'seat8': self.seat8.to_dict(),
            # 'seat9': self.seat9.to_dict(),
            # 'seat10': self.seat10.to_dict(),
            'currentTurn': self.currentTurn,
            'isActive': self.isActive,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
