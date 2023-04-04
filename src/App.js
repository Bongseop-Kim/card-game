import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { MonsterDictionary } from "./pages/MonsterDictionay.jsx";
import { ChannelSelection } from "./pages/ChannelSelection.jsx";
import { Home } from "./pages/Home";

function App() {
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
