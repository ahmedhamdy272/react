import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/done.json"
import emailAnimation from '../../../public/email.json'

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xldrnjyn");
  
  return (
    <div className="con">
      <h1 className="title-contact">
        <span>
          <i className="ri-mail-send-fill"></i>
        </span>
        Contact Us
      </h1>

      <p className="sub-title-con">
        Contact us for more information and Get notified when publish something
        new!
      </p>

      <div className="boxes">
        <form onSubmit={handleSubmit} className="left-box">
          <div className="">
            <label htmlFor="email">Email Address :</label>
            <input
            autoCapitalize="off"
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="bottom">
            <label htmlFor="text-area">Your Message :</label>
            <textarea name="message" id="text-area" placeholder="Message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <div className="right-box">
        <Lottie style={{height : 355}} animationData={emailAnimation} />
        </div>
      </div>
            {state.succeeded && (
              <h1 style={{textAlign: "center", display : "flex" ,}}>
                <Lottie loop = {false} style={{height : 55}} animationData={doneAnimation} />
                Your Message has been sended successfully 👌
                </h1>
              )}
        
    </div>
  );
}
