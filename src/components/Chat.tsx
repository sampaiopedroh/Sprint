import React, { useState } from 'react';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div className="flex-1 p-4">
            <div className="flex flex-col h-full">
                <div className="flex-grow overflow-y-auto p-4 border rounded-lg bg-white mb-4">
                    {messages.map((message, index) => (
                        <div key={index} className="mb-2">
                            <p>{message}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center border rounded-lg bg-white p-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-grow border-none outline-none p-2"
                        placeholder="Digite sua mensagem..."
                    />
                    <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.6 3.6 12 6l8.4 2.4 8.4-2.4 3.6 8.4-8.4-2.4z" />
                        </svg>


                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;