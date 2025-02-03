from flask_socketio import SocketIO, emit, send, join_room, leave_room, ConnectionRefusedError
from flask import request
# import eventlet
import os

# create your SocketIO instance
if os.environ.get("FLASK_ENV") == "production":
    origins = [
        "https://peterpoker.herokuapp.com",
        "https://peterpoker.fly.dev",
        "*"
    ]
else:
    origins = "*"

# create your SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)

# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    emit("chat", data, broadcast=True)

# @socketio.on("gameStart")
# def handle_chat(data):
#     emit("gameStart", data, broadcast=True)  

# @socketio.on('join')
# def on_join(data):
#     username = data['username']
#     room = data['room']
#     join_room(room)
#     send(username + ' has entered the room.', to=room)

# @socketio.on('leave')
# def on_leave(data):
#     username = data['username']
#     room = data['room']
#     leave_room(room)
#     send(username + ' has left the room.', to=room)

@socketio.on('broadcast message')
def message(data):
    room = data['room']
    # print(room, '999999999999999999999999999999999999')
    # print(data, '11111111111111111111111111111111111111')
    emit('broadcast message', data, room=room, broadcast=True)

@socketio.on('join')
def on_join(data):
    username = data['user']
    # print(username, '99999999999999999999999999')

    room = data['room']
    # print(room, '222222222222222222222222222222')
    join_room(room)
    # emit(data['user'], '99999999999999999999999999')
    # print((username + ' has entered the room ' + channel))
    # msg = { username + ' has entered the room ', room }

    # emit(username + ' has entered the room.', room=channel, broadcast=True)
    emit('broadcast message', data, room=room, broadcast=True)




# @socketio.on("my error event")
# def on_my_event(data):
#     raise RuntimeError()

# @socketio.on_error_default
# def default_error_handler(e):
#     print(request.event["message"]) # "my error event"
#     print(request.event["args"])    # (data,)
