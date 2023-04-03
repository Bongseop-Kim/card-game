export const Button = ({ type, text, onClick, className, style }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md ${className}`}
      type={type}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};
