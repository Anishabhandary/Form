import "./App.css";
import "./Resume.css";
// import Resume from "./components/Resume";
import Form from "./components/Form";

function App() {
  // document.body.style.backgroundColor = "rgb(187, 153, 90)";
  return (
    <>
      <h1>Student Registration Form</h1>
      <div className="App">
        <div className="container" style={{ padding: "100px" }}>
          <Form />
        </div>

        {/* <Resume /> */}
      </div>
    </>
  );
}

export default App;
