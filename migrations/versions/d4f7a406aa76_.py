"""empty message

Revision ID: d4f7a406aa76
Revises: 3382678d2ef1
Create Date: 2021-10-21 12:09:41.885989

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd4f7a406aa76'
down_revision = '3382678d2ef1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('players_game', sa.Column('seatNumber', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('players_game', 'seatNumber')
    # ### end Alembic commands ###