from .db import db


class Table(db.Model):
    __tablename__ = 'tables'

    id = db.Column(db.Integer, primary_key=True)
    tableName = db.Column(db.String(255), nullable=True)
    seat1 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat2 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat3 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat4 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat5 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat6 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat7 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat8 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat9 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat10 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    currentTurn = db.Column(db.Integer, nullable=False)
    isActive = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relationships
    user = db.relationship('User', back_populates='table')

    def to_dict(self):
        return {
            'id': self.id,
            'tableName': self.tableName,
            'seat1': self.user.to_dict(),
            'seat2': self.user.to_dict(),
            'seat3': self.user.to_dict(),
            'seat4': self.user.to_dict(),
            'seat5': self.user.to_dict(),
            'seat6': self.user.to_dict(),
            'seat7': self.user.to_dict(),
            'seat8': self.user.to_dict(),
            'seat9': self.user.to_dict(),
            'seat10': self.user.to_dict(),
            'currentTurn': self.currentTurn,
            'isActive': self.isActive,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
