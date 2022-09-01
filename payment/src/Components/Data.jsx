import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Style/Data.css";

//Reciving "func" as a props from parent component
const Data = ({ func }) => {
  // useState for assign initial value
  const [user, setUser] = useState({
    email: "",
    from: "",
    amount: "",
    description: "",
  });

  //useState for showing error for invalid email
  const [em, setEm] = useState();

  //useState for disable the submit button
  const [dis, setDis] = useState(true);

  // useState for showing error for invalid amount
  const [am, setAm] = useState();

  //distruction for avoiding giving every input seperate value.etc
  const { email, from, amount, description } = user;

  // function for saving value which is coming from user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // function of post request for sending data in json file or in a api
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
  };

  // function for submitting Data
  const SubmitData = () => {
    // regex for validating email
    const reg =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg.test(email) && amount > 0) {
      onSubmit();
      setTimeout(() => {
        func();
      }, 2000);
      window.alert("Success");
    } else {
      if (!reg.test(email)) {
        setEm("PLease Enter Valid Email");
      }
      if (amount <= 0) {
        setAm("Please Enter +ve Amount");
      }
    }
  };

  //useEffect for handling the side effect which is enable the submit button
  useEffect(() => {
    if (email.length > 0 && from !== 0 && from !== "" && amount !== "") {
      setDis(false);
    }
  }, [email, from, amount]);

  return (
    <div className="container">
      <div className="heading">
        <h2>PAYMENT METHOD</h2>
      </div>
      <div className="form">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="card">
            <label>To: </label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter E-mail Address"
              name="email"
              value={email}
              onChange={(e) => {
                onInputChange(e);
                setEm("");
              }}
            />
            <p>{em}</p>
          </div>
          <div className="card">
            <label>From: </label>
            <select name="from" value={from} onChange={(e) => onInputChange(e)}>
              <option value={0}>Choose...</option>
              <option value={"BTC"}>BTC</option>
              <option value={"ETH"}>ETH</option>
            </select>
          </div>
          <div class="card">
            <label>Amount: </label>
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="$"
              name="amount"
              value={amount}
              onChange={(e) => {
                onInputChange(e);
                setAm("");
              }}
            />
            <p>{am}</p>
          </div>
          <div class="card">
            <label>Description: </label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="(optional)"
              name="description"
              value={description}
              onChange={(e) => {
                onInputChange(e);
                setAm("");
              }}
            />
          </div>
          <button className="button" disabled={dis} onClick={SubmitData}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Data;
