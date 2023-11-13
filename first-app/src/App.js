import "./App.css";
import "./Resume.css";
import Resume from "./components/Resume";

function App() {
  document.body.style.backgroundColor = "rgb(187, 153, 90)";
  return (
    <div className="App">
      <Resume />
    </div>
  );
}

export default App;
