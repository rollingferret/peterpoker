from .db import db


class Table(db.Model):
    __tablename__ = 'tables'

    id = db.Column(db.Integer, primary_key=True)
    tableName = db.Column(db.String(255), nullable=True)
    seat1 = db.Column(db.Integer, db.ForeignKey('seat1'), nullable=True)
    seat2 = db.Column(db.Integer, db.ForeignKey('seat2'), nullable=True)
    seat3 = db.Column(db.Integer, db.ForeignKey('seat3'), nullable=True)
    seat4 = db.Column(db.Integer, db.ForeignKey('seat4'), nullable=True)
    seat5 = db.Column(db.Integer, db.ForeignKey('seat5'), nullable=True)
    seat6 = db.Column(db.Integer, db.ForeignKey('seat6'), nullable=True)
    seat7 = db.Column(db.Integer, db.ForeignKey('seat7'), nullable=True)
    seat8 = db.Column(db.Integer, db.ForeignKey('seat8'), nullable=True)
    seat9 = db.Column(db.Integer, db.ForeignKey('seat9'), nullable=True)
    seat10 = db.Column(db.Integer, db.ForeignKey('seat10'), nullable=True)
    currentTurn = db.Column(db.Integer, nullable=False)
    isActive = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relationships
    user = db.relationship('User', back_populates='tables')
    seat1 = db.relationship('User', foreign_keys=seat1, back_populates='tables')
    seat2 = db.relationship('User', foreign_keys=seat2, back_populates='tables')
    seat3 = db.relationship('User', foreign_keys=seat3, back_populates='tables')
    seat4 = db.relationship('User', foreign_keys=seat4, back_populates='tables')
    seat5 = db.relationship('User', foreign_keys=seat5, back_populates='tables')
    seat6 = db.relationship('User', foreign_keys=seat6, back_populates='tables')
    seat7 = db.relationship('User', foreign_keys=seat7, back_populates='tables')
    seat8 = db.relationship('User', foreign_keys=seat8, back_populates='tables')
    seat9 = db.relationship('User', foreign_keys=seat9, back_populates='tables')
    seat10 = db.relationship('User', foreign_keys=seat10, back_populates='tables')



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
