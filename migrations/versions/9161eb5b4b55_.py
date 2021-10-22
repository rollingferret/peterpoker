"""empty message

Revision ID: 9161eb5b4b55
Revises: 29b107675925
Create Date: 2021-10-20 22:31:03.306056

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9161eb5b4b55'
down_revision = '29b107675925'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'currentSimoleans',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'currentSimoleans',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###
