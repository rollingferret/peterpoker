from datetime import date, datetime
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import GameTable, db
# from flask_wtf.csrf import generate_csrf
# import os
from app.forms import NewGameTable
from app.forms import EditGameTable


gametables_routes = Blueprint('gametables', __name__)


@gametables_routes.route('')
def gametablesroute():
    '''
    GameTable GET route for ALL.
    '''
    gametables = GameTable.query.all()
    return{
        'gametables': {gametable.id: gametable.to_dict() for gametable in gametables}
}


@gametables_routes.route('/<int:id>')
def gametableroute(id):
    '''
    GameTable GET route by ID.
    '''
    gametables = GameTable.query.filter(GameTable.id == id).all()
    if not gametables:
        return {}
    else:
        return {gametable.id: gametable.to_dict() for gametable in gametables}


@gametables_routes.route('/new', methods=['POST'])
@login_required
def add_new_table():
    '''
    GameTable POST route.
    '''
    userId = current_user.get_id()
    form = NewGameTable()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        gametable = GameTable(
            tableName=form.data['tableName'],
            tableCreator=userId,
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(gametable)
        db.session.commit()
        return gametable.to_dict()
    else:

        return form.errors


@gametables_routes.route('/edit/<int:id>', methods=['PATCH'])
@login_required
def edit(id):
    '''
    GameTable PATCH route.
    '''
    userId = current_user.get_id()
    form = EditGameTable()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        edited_gametable = GameTable.query.get(id)
        if int(userId) == int(edited_gametable.tableCreator):
            edited_gametable.tableName = form.data['tableName']
            edited_gametable.updated_at = datetime.now()
            db.session.commit()

            return edited_gametable.to_dict()
        else:
            return 'You do not have access to edit this Game Table!'
    else:

        return form.errors


@gametables_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete(id):
    '''
    GameTable DELETE route.
    '''
    gametable_to_delete = GameTable.query.filter(GameTable.id == id).first()
    userId = current_user.get_id()

    if not gametable_to_delete:
        return 'Nothing to delete'
    else:
        if int(userId) == int(gametable_to_delete.tableCreator):
            db.session.delete(gametable_to_delete)
            db.session.commit()
            return gametable_to_delete.to_dict()
        else:
            return 'You do not have access to delete this Game Table!'
