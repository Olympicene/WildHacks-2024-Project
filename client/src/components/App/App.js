import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../../views/Landing/Landing";
import Homepage from "../../views/Homepage/Homepage";

export default function App() {
  require('./App.css');

  return (
    <BrowserRouter>
      <Routes>
      <Route>
          <Route index element={<Landing />} />
          <Route path="home" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
