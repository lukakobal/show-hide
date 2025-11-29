import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="app">
      <h1>Mini Toggle - Dan 25</h1>

      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <p className="box">Tu je skrit tekst 👋</p>}
    </div>
  );
}
