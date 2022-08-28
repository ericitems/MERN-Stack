import { BrowserRouter, Routes, Route } from "react-router-dom";
import useWorkoutsContext from "./hooks/useWorkoutsContext";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const { theme } = useWorkoutsContext();

  return (
    <div className={`App ${theme ? null : "App-dark"}`}>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
