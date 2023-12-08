import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contactus3.css";
import img5 from "./Images/Image5.jpg";

export const ContactUs3 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  function alertt() {
    alert("your response has been submitted");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uoo0kqc",
        "template_ogeqypd",
        form.current,
        "ipUvNoWN-ZVdZn_mU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="upper-div">
      <div className="semi-upper-div">
        <div className="image-div">
          <img src={img5} alt="apic"></img>
        </div>
        <div className="right-div">
          <form ref={form} onSubmit={sendEmail}>
            <div className="main-div">
              <div>
                <h1>
                  Welcome to <span>IDUR Academy.</span> Coolest platform
                  <span> Ever...</span>
                </h1>
              </div>
              <div className="name-div">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="NAME"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="email-div">
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="EMAIL"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="phonenum-div">
                <input
                  type="number"
                  name="user_phoneno"
                  placeholder="MOBILE NUMBER"
                  onChange={(e) => setNum(e.target.value)}
                  required
                />
              </div>
              <div className="radio-div">
                <div className="products">Products we offer :</div>
                <div>
                  <div>
                    <input type="radio" name="user_want" required />
                    <div>
                      <span>IDUR ACADEMY APP</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="radio-div">
              
              <div>
                <div>
                  <input type="radio" name="user_want" required />
                  <div>
                    <span>INTERACTIVE FLAT PANEL</span>
                  </div>
                </div>
              </div>
            </div>
              <div className="message-div">
                <div>
                  <textarea
                    name="message"
                    placeholder="MESSAGE"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="button">
               <div>
               <input
               type="submit"
               value="Send"
               disabled={!name || !email || !num || !message}
               onClick={alertt}
             /></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
