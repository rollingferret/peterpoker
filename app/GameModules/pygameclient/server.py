import socket
import _thread

localhost = socket.gethostname()

server = localhost
port = 5555

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    s.bind((server, port))
except socket.error as e:
    print(str(e))

s.listen(2)
print("Waiting for a connection, Server Started")

def threaded_client(conn):
    reply = ''
    while True:
        try:
            data = conn.recv(2048)
            if not data:
                print("Disconnected")
                break
            else:
                reply = data.decode("utf-8")
                print("Received: ", reply)

            conn.sendall(str.encode(reply))

        except:
            break

while True:
    conn, addr = s.accept()
    print("Connected to: ", addr)

    _thread.start_new_thread(threaded_client, (conn,))