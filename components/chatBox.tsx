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
                text: "Hello , I'm a bot",
                sender: "bot",
            };
        setMessages((prev)=>[...prev, botMessage])
        },1000);
    };

    return(
        <div className="w-full max-w-md bg-white rounded-xl shadow p-4">
            <h1 className="text-center text-xl font-bold mb-4">💬 Chat App</h1>
            <MessageList messages={messages}/>
            <MessageInput onSend={sendMessage}/>


        </div>

    );
}