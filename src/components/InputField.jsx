import React from "react";

export const InputField = ({ label, type, id, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full p-2 border border-gray-400 rounded-md"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
