import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client';
import css from './globalchat.module.css'

let socket;

const Chat = () => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        // open socket connection
        // create websocket
        // local socket


        socket = io();

        // heroku socket
        // socket = io('https://peterpoker.herokuapp.com');


        socket.on("chat", (chat) => {
            setMessages(messages => [...messages, chat])
        })

        socket.emit("chat", { user: 'Guest', msg: 'hello!' });
        setChatInput("")
        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [])

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    const sendChat = (e) => {
        e.preventDefault();
        if (chatInput === ''){
            window.alert('Please have something to say!')
        } else {
        if (!user) {
        socket.emit("chat", { user: 'Guest', msg: chatInput });
        setChatInput("")
        } else {
        socket.emit("chat", { user: user.username, msg: chatInput });
        setChatInput("")
        }
    }
    }

    return (
        <>
        <div className={css.chatcenter}>
        <div className={css.chatoutterdiv}>
            <div className={css.chatoutterdivreverse}>
                {messages.map((message, ind) => (
                    <div key={ind} className={css.chatwordbubble}>{`${message.user}: ${message.msg}`}</div>
                ))}
            </div>
            </div>
            <div className={css.chatinputdiv}>
            <div className={css.chatinputcenter}>
            <form onSubmit={sendChat} className={css.chatform}>
            <div className={css.chatcentering}>

                <input
                    value={chatInput}
                    onChange={updateChatInput}
                    className={css.chatinput}
                />
            </div>
                <button type="submit" className={css.sendit}>Send</button>
            </form>
        </div>
        </div>
        </div>

        </>
    
    )
};


export default Chat;