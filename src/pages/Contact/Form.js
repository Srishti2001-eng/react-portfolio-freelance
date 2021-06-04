import React, { useState, useEffect } from "react";
import "./Form.css";
import { db } from "./firebase";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-text">Name</label>
      <input
        className="input-text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="form-text">Email</label>
      <input
        className="input-text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="form-text">Message</label>
      <textarea
        className="input-text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div className="form-button">
        <input className="button" type="submit" value="Send Message"></input>
      </div>
    </form>
  );
};

export default Form;
