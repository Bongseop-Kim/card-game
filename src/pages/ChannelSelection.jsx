import React from "react";
import { channels } from "../assets/channels";
import { ChannelCard } from "../components/ChannelCard";

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
