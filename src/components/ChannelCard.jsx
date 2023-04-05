import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setChannel } from "../services/userItem";

export const ChannelCard = ({ channel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userItem = useSelector((state) => state.userItem);
  const handleChannel = () => {
    // dispatch(setChannel(channel.name));
    const patchChannel = async () => {
      await axios
        .patch(`http://localhost:8000/api/users/setChannel`, { email: userItem.email, channel: channel.name })
        .then((res) => {
          dispatch(setChannel(channel.name));
        });
    };
    patchChannel();
    navigate("/");
  };

  return (
    <div onClick={handleChannel} className="relative overflow-hidden rounded-lg cursor-pointer hover:border-2">
      <img src={channel.image} alt={channel.name} className="w-full" />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white font-bold text-xl">{channel.name}</h2>
      </div>
    </div>
  );
};
