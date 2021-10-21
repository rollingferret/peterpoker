from .db import db


class Table(db.Model):
    __tablename__ = 'tables'

    id = db.Column(db.Integer, primary_key=True)
    tableName = db.Column(db.String(255), nullable=True)
    seat_1 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_2 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_3 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_4 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_5 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_6 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_7 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_8 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_9 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    seat_10 = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    currentTurn = db.Column(db.Integer, nullable=False)
    isActive = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relationships
    user = db.relationship('User', uselist=False, back_populates='tables')
    seat1 = db.relationship('User', foreign_keys=[seat_1], uselist=False, back_populates='tables')
    seat2 = db.relationship('User', foreign_keys=[seat_2], uselist=False, back_populates='tables')
    seat3 = db.relationship('User', foreign_keys=[seat_3], uselist=False, back_populates='tables')
    seat4 = db.relationship('User', foreign_keys=[seat_4], uselist=False, back_populates='tables')
    seat5 = db.relationship('User', foreign_keys=[seat_5], uselist=False, back_populates='tables')
    seat6 = db.relationship('User', foreign_keys=[seat_6], uselist=False, back_populates='tables')
    seat7 = db.relationship('User', foreign_keys=[seat_7], uselist=False, back_populates='tables')
    seat8 = db.relationship('User', foreign_keys=[seat_8], uselist=False, back_populates='tables')
    seat9 = db.relationship('User', foreign_keys=[seat_9], uselist=False, back_populates='tables')
    seat10 = db.relationship('User', foreign_keys=[seat_10], uselist=False, back_populates='tables')



    def to_dict(self):
        return {
            'id': self.id,
            'tableName': self.tableName,
            'seat1': self.seat1.to_dict(),
            'seat2': self.seat2.to_dict(),
            'seat3': self.seat3.to_dict(),
            'seat4': self.seat4.to_dict(),
            'seat5': self.seat5.to_dict(),
            'seat6': self.seat6.to_dict(),
            'seat7': self.seat7.to_dict(),
            'seat8': self.seat8.to_dict(),
            'seat9': self.seat9.to_dict(),
            'seat10': self.seat10.to_dict(),
            'currentTurn': self.currentTurn,
            'isActive': self.isActive,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
