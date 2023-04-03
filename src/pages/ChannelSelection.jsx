import React from "react";

const channels = [
  {
    id: 1,
    name: "Forest",
    image: require("../assets/maps/Forest.png"),
  },
  {
    id: 2,
    name: "Desert",
    image: require("../assets/maps/Desert.png"),
  },
  {
    id: 3,
    name: "City",
    image: require("../assets/maps/City.png"),
  },
  {
    id: 4,
    name: "Space",
    image: require("../assets/maps/space.png"),
  },
  {
    id: 5,
    name: "Underwater",
    image: require("../assets/maps/Underwater.png"),
  },
  {
    id: 6,
    name: "Castle",
    image: require("../assets/maps/Castle.png"),
  },
  {
    id: 7,
    name: "Jungle",
    image: require("../assets/maps/Jungle.png"),
  },
  {
    id: 8,
    name: "Arctic",
    image: require("../assets/maps/Arctic.png"),
  },
];

const ChannelCard = ({ channel }) => {
  return (
    <div className="relative overflow-hidden rounded-lg cursor-pointer hover:border-2">
      <img src={channel.image} alt={channel.name} className="w-full" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white font-bold text-xl">{channel.name}</h2>
      </div>
    </div>
  );
};

export const ChannelSelection = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Select a Channel</h1>
      <div className="grid grid-cols-4 gap-4">
        {channels.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
};
