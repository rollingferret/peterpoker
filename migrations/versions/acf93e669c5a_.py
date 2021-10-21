"""empty message

Revision ID: acf93e669c5a
Revises: 
Create Date: 2021-10-20 21:42:11.109492

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'acf93e669c5a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('gamelogs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('gameId', sa.Integer(), nullable=True),
    sa.Column('turn', sa.Integer(), nullable=True),
    sa.Column('move', sa.String(length=255), nullable=True),
    sa.Column('resolution', sa.String(length=255), nullable=True),
    sa.Column('bet', sa.Integer(), nullable=True),
    sa.Column('currentPot', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('bio', sa.String(length=255), nullable=True),
    sa.Column('avatar_url', sa.String(length=255), nullable=True),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('currentSimoleans', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('follows',
    sa.Column('follower_id', sa.Integer(), nullable=True),
    sa.Column('followed_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['followed_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['follower_id'], ['users.id'], )
    )
    op.create_table('tables',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tableName', sa.String(length=255), nullable=True),
    sa.Column('seat_1', sa.Integer(), nullable=True),
    sa.Column('currentTurn', sa.Integer(), nullable=False),
    sa.Column('isActive', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['seat_1'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tables')
    op.drop_table('follows')
    op.drop_table('users')
    op.drop_table('gamelogs')
    # ### end Alembic commands ###
