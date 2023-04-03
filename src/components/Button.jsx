import React from "react";

const Button = ({ buttonName }) => {
  return (
    <button className="bg-blue-950 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md" type="submit">
      {buttonName}
    </button>
  );
};

export default Button;
