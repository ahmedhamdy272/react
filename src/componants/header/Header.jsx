import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("currentMode")  ?? "dark");

  useEffect(() => {
    if (mode === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark")
    }
},[mode])

  return (
    <div className="header">
      <button
        className="small button"
        onClick={() => {
          setShowModel(true);
        }}
      >
        <i className="ri-menu-line"></i>
      </button>
      <div />
      <ul className="list">
        <li className="list-item">About</li>
        <li className="list-item">Articles</li>
        <li className="list-item">Projects</li>
        <li className="list-item">Speaking</li>
        <li className="list-item">Uses</li>
      </ul>

      <button onClick={() => {
        localStorage.setItem("currentMode" , mode === "dark" ? "light" : "dark");

        setMode(localStorage.getItem("currentMode"))
      }} className="button">
        { mode === "dark" ? (<i className="ri-sun-line"></i>) : (<i className="ri-moon-line"></i>)}
      </button>

      {showModel && (
        <div className="fixed">
          <ul>
            <li>
              <button
                className="btn"
                onClick={() => {
                  setShowModel(false);
                }}
              >
                <i className="ri-close-line"></i>
              </button>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Articles">Articles</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Speaking">Speaking</a>
            </li>
            <li>
              <a href="#Uses">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
