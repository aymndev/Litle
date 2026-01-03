import {Message} from "../types/message"
type Props={
	messages:Message[]

};

export default function MessagesList({messages} : Props){
	return(
		<div className="h-64 overflow-y-auto border p-2 mb-3 rounded">
			{messages.map((msg) => (
				<p key={msg.id} className={`mb-1 ${msg.sender === "user" ? "text-right text-blue-500" : "text-left text-green-500"}`}>
					{msg.sender === "user" ? "you" : "bot"}
					{msg.text}

				</p>


			))}

		</div>
	);


}