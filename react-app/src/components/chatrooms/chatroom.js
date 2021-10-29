import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client';
import css from './chatroom.module.css'

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
        if (chatInput === '') {
            window.alert('Please have something to say!')
        } else {
        socket.emit('broadcast message', { user: user.username, msg: chatInput, room: room});
        setChatInput("")
    }}

    return (user && (
        <>
        <div className={css.chatoutterdiv}>
            <div className={css.chatoutterdivreverse}>
                {messages.map((message, ind) => (
                    <><div key={ind} className={css.chatwordbubble}>{`${message.user}: ${message.msg}`}</div></>
                ))}
            </div>
        </div>
        <div className={css.chatinputdiv}>
        <div className={css.chatinputcenter}>
        <form onSubmit={sendChat} className={css.chatform}>
                <input
                    value={chatInput}
                    onChange={updateChatInput}
                    className={css.chatinput}
                />
                <button type="submit" className={css.sendit}>Send</button>
            </form>
        </div>
        </div>
        
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.js" integrity="sha512-q/dWJ3kcmjBLU4Qc47E4A9kTB4m3wuTY7vkFJDTZKjTs8jhyGQnaUrxa0Ytd0ssMZhbNua9hE+E7Qv1j+DyZwA==" crossorigin="anonymous"></script> */}
        </>
    )
    )
};


export default Chatroom;