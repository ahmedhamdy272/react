import { useState } from "react";
import "./main.css";
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

const myProjects = [
  {
    projectTitle: "Beginner Portfolio",
    category: "css",
    id: "1",
    img: "./7.png",
    url: "  ",
  },
  {
    projectTitle: "Cactus Store",
    category: "js",
    id: "2",
    img: "./3.png",
    url: "https://ahmedhamdy272.github.io/new-app/",
  },
  {
    projectTitle: "Practice on HTML",
    category: "css",
    id: "3",
    img: "./5.png",
    url: "",
  },
  {
    projectTitle: "Hangman Game",
    category: "js",
    id: "4",
    img: "./4.png",
    url: "https://ahmedhamdy272.github.io/Hangman-Game/",
  },
  {
    projectTitle: "DashBoard",
    category: "react",
    id: "5",
    img: "./6.png",
    url: "",
  },
  {
    projectTitle: "GYM Web",
    category: "js",
    id: "6",
    img: "./2.png",
    url: "https://ahmedhamdy272.github.io/gym/",
  },
  {
    projectTitle: "Coder Girl",
    category: "css",
    id: "7",
    img: "./10.jpg",
    url: "",
  },
  {
    projectTitle: "School Template",
    category: "js",
    id: "8",
    img: "./11.jpg",
    url: "",
  },
  {
    projectTitle: "Coffee Web",
    category: "react",
    id: "9",
    img: "./1.jpg",
    url: "",
  },
];
export default function MainSec() {
  const [first, setfirst] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleButton = (buttonCatergory) => {
    setfirst(buttonCatergory);

    const newArr = myProjects.filter((item) => {
      return item.category === buttonCatergory;
    });

    setArr(newArr);
  };
  return (
    <main>
      <section className="left-side">
        <ul>
          <li>
            <button
              onClick={() => {
                setfirst("all");
                setArr(myProjects);
              }}
              className={first === "all" ? "active" : null}
            >
              All Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleButton("css");
              }}
              className={first === "css" ? "active" : null}
            >
              HTML & CSS
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleButton("js")
              }}
              className={first === "js" ? "active" : null}
            >
              JavaScript
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleButton("react")
              }}
              className={first === "react" ? "active" : null}
            >
              React & MUI
            </button>
          </li>
        </ul>
      </section>
      <section className="right-side">

      <AnimatePresence>
        {arr.map((card) => {
          return (
            <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{type : "spring" , damping : 8}}
            key={card.id} className="card">
              <img src={card.img} alt="" />
              <div className="box">
                <h2 className="title">{card.projectTitle}</h2>
                <p className="sub_title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  id consectetur a ullam. Explicabo expedita repudiandae,
                  nesciunt
                </p>
              </div>
              <div className="links">
                <div>
                  <a target="_blank" href={card.url}>
                    <i className="ri-links-fill"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/ahmedhamdy272?tab=repositories"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </div>

                <a>
                  More
                  <span>
                    <i className="ri-arrow-right-double-line"></i>
                  </span>
                </a>
              </div>
            </motion.div>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
}
