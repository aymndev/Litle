"use client";

import { useState } from "react";
import { Message } from "../types/message";
import MessageInput from "./messageInput";
import MessageList from "./messageList";


export default function ChatBox(){
    const [messages,setMessages]=useState<Message[]>([]);
    const sendMessage=(text: string)=>{
        if(text.trim() === "")return ;
        const userMessage: Message={
            id : Date.now(),
            text,
            sender: "user",
        };
        setMessages((prev)=>[...prev, userMessage]);


        setTimeout(()=> { 
            const botMessage: Message={
                id:Date.now()+1,
                // text: "Hello , I'm a bot,how are you ",
                text:`Hello , I'm a bot,how are you ?`,
                sender: "bot",
            };
        setMessages((prev)=>[...prev, botMessage])
        },1000);
    };

    return(
        <div className="chat-card">
            <h1 className="chat-title">💬 Chat App</h1>
            <MessageList messages={messages}/>
            <MessageInput onSend={sendMessage}/>
        </div>

    );
}