from flask_socketio import SocketIO, emit, send, join_room, leave_room, ConnectionRefusedError
from flask import request
import os

# create your SocketIO instance
if os.environ.get("FLASK_ENV") == "production":
    origins = [
        "https://peterpoker.herokuapp.com",
        "https://peterpoker.herokuapp.com"
    ]
else:
    origins = "*"

# create your SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)

# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    emit("chat", data, broadcast=True)

@socketio.on("gameStart")
def handle_chat(data):
    emit("gameStart", data, broadcast=True)  

@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', to=room)

@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', to=room)

# @socketio.on('connect')
# def connect():
#     if not self.authenticate(request.args):
#         raise ConnectionRefusedError('unauthorized!')

# @socketio.on('disconnect')
# def test_disconnect():
#     print('Client disconnected')

# @socketio.on_error()        # Handles the default namespace
# def error_handler(e):
#     pass

# @socketio.on_error('/chat') # handles the '/chat' namespace
# def error_handler_chat(e):
#     pass

@socketio.on("my error event")
def on_my_event(data):
    raise RuntimeError()

@socketio.on_error_default
def default_error_handler(e):
    print(request.event["message"]) # "my error event"
    print(request.event["args"])    # (data,)