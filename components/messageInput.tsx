"use client";
import { useState } from "react";

type Props = {
	onSend: (text: string) => void;
};

export default function MessageInput({ onSend }: Props) {
	const [text, setText] = useState("");

	const handleSend = () => {
		if (text.trim() === "") return;
		onSend(text);
		setText("");
	};

		return (
			<div className="message-input-row">
				<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Type a message..."
					className="flex-1 border rounded px-2 py-1"
				onKeyDown={(e) => e.key === "Enter" && handleSend()}
			/>
				<button onClick={handleSend} className="bg-blue-500 text-white px-3 py-1 rounded">
				Send
			</button>
		</div>
	);
}