import React, { useState } from "react";

function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Name :" + name);
    console.log("Email :" + email);
    console.log("USN :" + usn);
    console.log("Address :" + address);
    console.log("Branch :" + branch);
    console.log("Sem :" + sem);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [usn, setUsn] = useState("");
  const [address, setAddress] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  return (
    <>
      <div>
        <form
          action=""
          style={{
            border: "2px solid black",
            padding: "40px",
            borderRadius: "50px",
            backgroundColor: "yellowgreen",
          }}
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              pattern="^[a-zA-Z]+(?: [a-zA-Z]+)*$"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={usn}
              onChange={(e) => {
                setUsn(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">USN</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></textarea>
            <label htmlFor="floatingTextarea">Address</label>
          </div>
          <br />
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              value={branch}
              onChange={(e) => {
                setBranch(e.target.value);
              }}
            >
              <option></option>
              <option value="1">CSE</option>
              <option value="2">AIML</option>
              <option value="3">CSD</option>
            </select>
            <label htmlFor="floatingSelect">Select branch</label>
          </div>
          <br />
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              value={sem}
              onChange={(e) => {
                setSem(e.target.value);
              }}
            >
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <label htmlFor="floatingSelect">Select sem</label>
          </div>
          <br />
          <div class="col-auto d-grid">
            <button
              type="submit"
              class="btn btn-success mb-3"
              onSubmit={handleOnSubmit}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
