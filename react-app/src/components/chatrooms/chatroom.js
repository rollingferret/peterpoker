import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client';

let socket;

const Chatroom = (props) => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const user = useSelector(state => state.session.user)

    // console.log(props.roomName, '1111111111111111111111111111111')
    const room = `${props.roomName}`

    useEffect(() => {
        // open socket connection
        // create websocket
        // local socket
        socket = io();

        // heroku socket
        // socket = io('https://peterpoker.herokuapp.com');

        socket.emit('join', { user: user.username, msg: `has joined room ${room}`, room: room });


        socket.on('broadcast message', (data) => {
            console.log(data, 'chaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat2')
            console.log(data['user'], 'chaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat2')
            console.log(data['room'], 'chaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat2')

            // let broadcastMessage = {'user}
            setMessages(messages => [...messages, data])
            // console.log(data, 'chaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat2')
        })

        console.log(messages, '222222222222222222222222222222')

        // socket.emit('join', { user: user.username, channel: 'channel'});


        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, []);

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    const sendChat = (e) => {
        e.preventDefault()
        socket.emit('broadcast message', { user: user.username, msg: chatInput, room: room});
        setChatInput("")
    }

    return (user && (
        <>
        <div>TEST</div>
        <div>
            <div>hello2
                {messages.map((message, ind) => (
                    <><div key={ind}>{`${message.user}: ${message.msg}`}</div><div>message2</div></>
                ))}
            </div>
            <form onSubmit={sendChat}>
                <input
                    value={chatInput}
                    onChange={updateChatInput}
                />
                <button type="submit">Send</button>
            </form>
        </div>
        <div>TEST</div>
        
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js" integrity="sha512-q/dWJ3kcmjBLU4Qc47E4A9kTB4m3wuTY7vkFJDTZKjTs8jhyGQnaUrxa0Ytd0ssMZhbNua9hE+E7Qv1j+DyZwA==" crossorigin="anonymous"></script> */}
        </>
    )
    )
};


export default Chatroom;