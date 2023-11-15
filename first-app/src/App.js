import "./App.css";
import "./Resume.css";
// import Resume from "./components/Resume";
// import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Contact from "./pages/contact/Contact";

function App() {
  // document.body.style.backgroundColor = "rgb(187, 153, 90)";
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <Form /> */}
        {/* <Resume /> */}
      </div>
    </>
  );
}

export default App;
