import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="card">
      <h2>Track your EXPENSE with the app</h2>
      <p>Created by Eminence</p>
      <p>Version: 1.0.0</p>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
}

export default About;
