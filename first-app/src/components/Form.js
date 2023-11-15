import React, { useState } from "react";

function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      usn: usn,
      email: email,
      phone: phone,
      sem: sem,
      branch: branch,
    };
    console.log(data);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [usn, setUsn] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <form
        action=""
        style={{
          border: "2px solid black",
          padding: "30px",
          borderRadius: "50px",
          backgroundColor: "yellowgreen",
        }}
        onSubmit={handleOnSubmit}
      >
        <h1>STUDENT REGISTRATION</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            pattern="[A-Za-z\s]+"
            title="Alphabets only"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            USN
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter USN"
            required
            value={usn}
            onChange={(e) => {
              setUsn(e.target.value);
            }}
            pattern="^\d[a-zA-Z]{2}\d{2}[a-zA-Z]{2}\d{3}$"
            title="Enter in DAADDAADDD form"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Phone No.
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter phone no."
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            pattern="(\+91)?[0-9]{10}"
            title="Enter 10 numbers"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Semester
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            required
            value={sem}
            onChange={(e) => {
              setSem(e.target.value);
            }}
          >
            <option>-----------------select Semester---------------</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Branch
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            required
            value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
            }}
          >
            <option>------------------select Branch---------------</option>
            <option value="1">CSE-A</option>
            <option value="2">CSE-B</option>
            <option value="3">AIML</option>
            <option value="4">ISE</option>
            <option value="5">CSD</option>
          </select>
        </div>
        <div className="col-auto d-grid">
          <button type="submit" className="btn btn-outline-success mb-3">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
