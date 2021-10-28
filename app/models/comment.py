from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    commented_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    commenter_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relationships
    commented = db.relationship('User', foreign_keys=[commented_user_id])
    commenter = db.relationship('User', foreign_keys=[commenter_user_id])
    # user = db.relationship('User', back_populates='comments', uselist=False)


    def to_dict(self):
        return {
            'id': self.id,
            'commented_user_id': self.commented_user_id,
            # 'user': self.user.to_dict(),
            'commenter_user_id': self.commenter_user_id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
