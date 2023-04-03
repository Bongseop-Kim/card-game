import React from "react";
import { useState } from "react";
import "tailwindcss/tailwind.css";

export const AllUser = () => {
  const [connectedUsers, setConnectedUsers] = useState([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ]);

  return (
    <div className="bg-gray-100 p-4 w-full">
      <h2 className="text-lg font-bold mb-4">Connected Users:</h2>
      <ul>
        {connectedUsers.map((user) => (
          <li key={user.id} className="text-gray-800 mb-2">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
