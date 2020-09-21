import React from "react";
import Navigation from "../admin/Navigation";

const Base = ({
  title = "My-Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => (
  <div className="bg-dark">
    <Navigation />
    <div>
      <div className="jumbotron text-white bg-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
        <div className={className}>{children}</div>
      </div>
      <footer className="bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center">
          <h4>If you have any quest,feel free to ask me </h4>
          <button className="btn btn-warning bt-lg mb-3">Click me </button>
        </div>
      </footer>
    </div>
  </div>
);

export default Base;
