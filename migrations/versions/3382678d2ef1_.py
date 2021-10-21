"""empty message

Revision ID: 3382678d2ef1
Revises: 4725e2ed3526
Create Date: 2021-10-21 10:20:59.470961

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '3382678d2ef1'
down_revision = '4725e2ed3526'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('gametables',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tableName', sa.String(length=255), nullable=True),
    sa.Column('currentTurn', sa.Integer(), nullable=False),
    sa.Column('isActive', sa.Boolean(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('players_game',
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('player_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['gametables.id'], ),
    sa.ForeignKeyConstraint(['player_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('game_id', 'player_id')
    )
    op.drop_table('tables')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tables',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('tableName', sa.VARCHAR(length=255), autoincrement=False, nullable=True),
    sa.Column('seat_1', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('currentTurn', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('isActive', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.Column('created_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=False),
    sa.Column('updated_at', postgresql.TIMESTAMP(), autoincrement=False, nullable=False),
    sa.Column('seat_2', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('seat_3', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['seat_1'], ['users.id'], name='tables_seat_1_fkey'),
    sa.ForeignKeyConstraint(['seat_2'], ['users.id'], name='tables_seat_2_fkey'),
    sa.ForeignKeyConstraint(['seat_3'], ['users.id'], name='tables_seat_3_fkey'),
    sa.PrimaryKeyConstraint('id', name='tables_pkey')
    )
    op.drop_table('players_game')
    op.drop_table('gametables')
    # ### end Alembic commands ###