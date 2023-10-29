import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./All_Pages_Details/Home";
import FillingDetails from "./All_Pages_Details/Filling_Details";
import SelectedIdCheck from "./Components/SelectedId_Check";
import About from "./All_Pages_Details/About";
import Resumes from "./All_Pages_Details/Resumes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home_Page Route */}
        <Route exact path="/" element={<Home />} />

        {/* Details_Filling Page */}
        <Route
          exact
          path="/template/fill-details"
          element={
            <SelectedIdCheck>
              <FillingDetails />
            </SelectedIdCheck>
          }
        />

        {/*  Resumes Page */}
        <Route exact path="/my/resumes" element={<Resumes />} />

        {/* About  Page */}
        <Route exact path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
