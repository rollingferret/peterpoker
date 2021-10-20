from .db import db
class GameLog(db.Model):
    __tablename__ = 'gamelogs'

    id = db.Column(db.Integer, primary_key=True)
    gameId = db.Column(db.Integer, nullable=True)
    turn = db.Column(db.Integer, nullable=True)
    # actingplayer = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    move = db.Column(db.String(255), nullable=True)
    resolution = db.Column(db.String(255), nullable=True)
    bet = db.Column(db.Integer, nullable=True)
    currentPot = db.Column(db.Integer, nullable=True)
    # player1_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player1_simoleans = db.Column(db.Integer, nullable=True)
    # player2_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player2_simoleans = db.Column(db.Integer, nullable=True)
    # player3_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player3_simoleans = db.Column(db.Integer, nullable=True)
    # player4_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player4_simoleans = db.Column(db.Integer, nullable=True)
    # player5_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player5_simoleans = db.Column(db.Integer, nullable=True)
    # player6_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player6_simoleans = db.Column(db.Integer, nullable=True)
    # player7_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player7_simoleans = db.Column(db.Integer, nullable=True)
    # player8_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player8_simoleans = db.Column(db.Integer, nullable=True)
    # player9_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player9_simoleans = db.Column(db.Integer, nullable=True)
    # player10_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    # player10_simoleans = db.Column(db.Integer, nullable=True)
    # created_at = db.Column(db.DateTime, nullable=True)
    # relationships
    # user = db.relationship('User', back_populates='gamelogs', uselist=False)

    def to_dict(self):
        return {
            # 'id': self.id,
            # 'gameId': self.gameId,
            # 'turn': self.turn,
            # 'actingplayer': self.user.to_dict(),
            # 'move': self.move,
            # 'resolution': self.resolution,
            # 'id': self.id,
            # 'gameId': self.gameId,
            # 'turn': self.turn,
            # 'actingplayer': self.user.to_dict(),
            # 'content': self.content,
            # 'created_at': self.created_at,
            # 'id': self.id,
            # 'gameId': self.gameId,
            # 'turn': self.turn,
            # 'actingplayer': self.user.to_dict(),
            # 'content': self.content,
            # 'created_at': self.created_at,
            # 'id': self.id,
            # 'gameId': self.gameId,
            # 'turn': self.turn,
            # 'actingplayer': self.user.to_dict(),
            # 'content': self.content,
            # 'created_at': self.created_at,
        }
