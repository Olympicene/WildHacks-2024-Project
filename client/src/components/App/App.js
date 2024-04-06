import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../../views/Landing/Landing";
import Homepage from "../../views/Homepage/Homepage";
import Matches from "../../views/Matches/Matches";

export default function App() {
  require('./App.css');

  return (
    <BrowserRouter>
      <Routes>
      <Route>
          <Route index element={<Landing />} />
          <Route path="home" element={<Homepage />} />
          <Route path = "matches"  element={<Matches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
