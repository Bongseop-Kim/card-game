import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { MonsterDictionary } from "./pages/MonsterDictionary.jsx";
import { ChannelSelection } from "./pages/ChannelSelection.jsx";
import { Home } from "./pages/Home";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCards, setChannel, setEmail, setId, setLose, setName, setWin } from "./services/userItem";
import Cookies from "js-cookie";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async (token) => {
      await axios
        .get("http://localhost:8000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setId(res.data.data.id));
          dispatch(setEmail(res.data.data.email));
          dispatch(setName(res.data.data.name));
          dispatch(setWin(res.data.data.win));
          dispatch(setLose(res.data.data.lose));
          dispatch(setCards(res.data.data.cards));
          dispatch(setChannel(res.data.data.channel));
        })
        .catch((error) => {
          alert(error.response.data.error.message);
        });
    };

    if (Cookies.get("token")) {
      fetchUser(Cookies.get("token"));
    } else {
      // navigate("/login"); 현재 접속한 유저가 없습니다.
    }
  }, []);
  console.log("HI");

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monsterDictionary" element={<MonsterDictionary />} />
          <Route path="/channelSelection" element={<ChannelSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
