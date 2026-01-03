import {Message} from "../types/message"
type Props={
	messages:Message[]

};

export default function MessagesList({messages} : Props){
	return(
		<div className="message-list">
			{messages.map((msg) => (
				<div key={msg.id} className={`message-item ${msg.sender === "user" ? "user" : "bot"}`}>
					<div style={{fontSize:12, color:'#334155', marginBottom:4}}>{msg.sender === "user" ? "You" : "Bot"}</div>
					<div>{msg.text}</div>
				</div>


			))}

		</div>
	);


}