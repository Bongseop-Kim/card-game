import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";
dayjs.extend(relativeTime);

export const Chatting = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newMessage = {
      author: "John Doe", // replace with the actual author's name
      content: inputValue,
      createdAt: new Date(),
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  }

  return (
    <div className="bg-gray-800 opacity-70 flex flex-col justify-between h-full py-4 px-2">
      <div className="overflow-y-scroll py-2 ">
        <div className="p-4 flex-1">
          {messages.map((message, index) => (
            <div key={index} className="p-2 mb-4 rounded-lg grid grid-cols-6 bg-white shadow-md">
              <div className="font-bold col-span-1">{message.author}</div>
              <div className="w-full col-span-4">{message.content}</div>
              <div className="text-gray-600 text-sm col-span-1">{dayjs(message.createdAt).locale("en").fromNow()}</div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="py-4 pl-4">
        <div className="flex">
          <input
            type="text"
            className="flex-1 border-gray-300 rounded-md p-2 mr-2 bg-blue-200"
            placeholder="Type your message here"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
            전송
          </button>
        </div>
      </form>
    </div>
  );
};
