from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/follow', methods=['GET'])
@login_required
def follow_user(id):
    '''
    user that is currently logged in can follow the user whose id is in the params.
    '''

    curr_user = User.query.get(current_user.get_id())
    if not curr_user:
        return {'errors': 'Current user does not exist.'}, 401

    user_to_follow = User.query.get(id)
    if not user_to_follow:
        return {'errors': 'User to be followed does not exist.'}, 401

    if user_to_follow in curr_user.following.all():
        return {'errors': 'User already followed.'}, 401

    curr_user.following.append(user_to_follow)

    db.session.commit()

    return {'follower': curr_user.to_dict(), 'following': user_to_follow.to_dict()}


@user_routes.route('/<int:id>/follow', methods=['DELETE'])
@login_required
def unfollow_user(id):
    '''
    user that is currently logged in can unfollow the user whose id is in the params
    '''
    curr_user = User.query.get(current_user.get_id())
    if not curr_user:
        return {'errors': 'Current user does not exist.'}, 401

    user_to_unfollow = User.query.get(id)
    if not user_to_unfollow:
        return {'errors': 'User to be followed does not exist.'}, 401

    if user_to_unfollow not in curr_user.following.all():
        return {'errors': 'User already unfollowed.'}, 401

    curr_user.following.remove(user_to_unfollow)

    db.session.commit()

    return {'follower': curr_user.to_dict(), 'following': user_to_unfollow.to_dict()}

