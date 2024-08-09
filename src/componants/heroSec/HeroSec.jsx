
import './hero.css'
import Lottie from "lottie-react";
import CodeAnimation from '../../../public/code.json'
import { motion } from "framer-motion"

export default function HeroSec() {
  return (
    <div>
    <section className='hero'>
      <div className="lift-side">
        <div className="info">
          <img src="./IMG-20240620-WA0389-modified.png" alt="Personal-photo" />
          <i className="ri-check-line"></i>
        </div>

        <div className="main-title">
          <motion.p
          initial = {{opacity : 0}}
          animate = {{opacity : 1}}
          transition={{duration : 1}}>Software Developer , Web Developer , Founder and Amateur Astronaut.</motion.p>
        </div>

        <div className="sub-title">
          <p>I'm Ahmed Hamdy , a software developer and web developer and a student in financial and commerce collage in Egypt.</p>
        </div>

        <div className="social">
          <ul>
            <li><a target='-blank' href="https://x.com/AhmedHa87740668" className="social-item"><i className="ri-twitter-fill"></i></a></li>
            <li><a target='-blank' href="https://www.instagram.com/ah_med.ham_dy/" className="social-item"><i className="ri-instagram-line"></i></a></li>
            <li><a target='-blank' href="https://www.linkedin.com/in/ahmed-hamdy-35a96b263/" className="social-item"><i className="ri-linkedin-box-fill"></i></a></li>
            <li><a target='-blank' href="https://github.com/ahmedhamdy272" className="social-item"><i className="ri-github-fill"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="right_side">
      <Lottie style={{height : 500}} animationData={CodeAnimation} />
      </div>
    </section>
    </div>
  )
}
