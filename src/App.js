import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Country from "./pages/Country/Country";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/country/:name/:code" element={<Country />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
