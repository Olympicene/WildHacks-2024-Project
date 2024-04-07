import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../../views/Landing/Landing";
import Homepage from "../../views/Homepage/Homepage";
import Matches from "../../views/Matches/Matches";
import WithNav from "./WithNav";
import WithoutNav from "./WithoutNav";
import Profile from "../../views/Profile/Profile";

function App() {
  require('./App.css');

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route index element={<Landing />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="home" element={<Homepage />} />
          <Route path="matches" element={<Matches />} />
          <Route path = "profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;