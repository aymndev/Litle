"user clinet"
import { useState} from "react";
type Props ={
	onSend: (text: string) => void;
};

export default function MessageInput ({onSend} : Props){
	const [text,setText]=useState("");

	const handleSend =()=>{
		if (text.trim() === "") return ;
		onSend(text);
		setText("");
	};

	return(
		<div className="flex gap-2">
			<input
			type="text"
			value={text}
			onChange={(e) =>(e.target.value)}
			placeholder="Type a message..."
			className="flex-1 border rounded px-2 py-1"
			onKeyDown={(e) => e.key === "Enter" && handleSend()}
			
			/>
			<button>Send</button>

		</div>


	);



}