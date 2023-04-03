export const GameCard = ({ name, attackPower, imageUrl }) => {
  return (
    <div className="relative border rounded-lg overflow-hidden shadow-lg">
      <h2 className="p-2 bg-white">{name}</h2>
      <div className="absolute top-0 right-0 bg-red-500 text-white py-2 px-2 font-medium">{attackPower}</div>
      <img src={imageUrl} alt={name} className=" w-full object-contain" />
      <div className="absolute bottom-4 w-3/4 m-auto left-0 right-0"></div>
    </div>
  );
};
