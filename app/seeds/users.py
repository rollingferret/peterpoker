from app.models import db, User
from faker import Faker

fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')

    for i in range(0, 20):
        new_user = User(
            username=fake.user_name(),
            email=fake.free_email(),
            password='password',
            avatar_url = f"https://picsum.photos/seed/{fake.uuid4()}/200/300",
            bio=' '.join(fake.sentences(nb=3))
        )
        db.session.add(new_user)


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
