export const CloseButton = ({ onClick }) => (
  <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M14.348 5.652a.5.5 0 01.708.708L11.707 10l3.35 3.35a.5.5 0 11-.708.708L11 10.707l-3.65 3.65a.5.5 0 11-.708-.708L10.293 10 6.644 6.35a.5.5 0 01.708-.708L11 9.293l3.65-3.65z"
        clipRule="evenodd"
        strokeWidth="2"
      />
    </svg>
  </button>
);
