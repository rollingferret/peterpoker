'''
seed gametables with faker
'''

from faker import Faker
from random import randint
from datetime import datetime

from app.models import db, GameTable

fake = Faker()


def seed_gametables():
    for i in range(0, 30):
        new_gametable = GameTable(
            tableName=fake.sentence(),
            tableCreator=randint(1, 20),
            created_at=datetime.now(),
            updated_at=datetime.now()
        )

        db.session.add(new_gametable)
    db.session.commit()


def undo_gametables():
    db.session.execute('TRUNCATE gametables RESTART IDENTITY CASCADE')
    db.session.commit()
