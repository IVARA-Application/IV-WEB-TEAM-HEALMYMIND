import React, { useState } from "react";
import axios from "axios";
import fb from "../img/facebook.png";
import google from "../img/google.png";
import linkedin from "../img/linkedin.png";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [disabled, setDisabled] = useState("");
  const [message, setMessage] = useState("Sign Up");

  async function handleRegisterSubmission(event) {
    event.preventDefault();
    setMessage("Please Wait");
    setDisabled("true");
    console.log("Sending...");
    try {
      const response = await axios.post(
        "https://vkrx5omg34.execute-api.ap-south-1.amazonaws.com/latest/register",
        {
          name: document.getElementById("name-input").value,
          email: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value,
          occupation: document.getElementById("occupation-input").value,
          phone: document.getElementById("phone-input").value,
          type: "custom",
        },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 500;
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data.success) throw Error(response.data.message);
      window.localStorage.setItem("token", response.data.token);
      alert(
        "You are signed up for. Welcome to MentorBaba! Please sign in to continue."
      );
      window.location.replace("/login");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="flex flex-wrap createacc-container">
      <div className="left-createacc w-full md:w-2/5 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Namaste!</h1>
        <p className="py-12 text-2xl text-center">
          To keep connected with us please <br /> login with your personal info
        </p>
        <Link to="/login">
          <button className="rounded-full py-2 px-20 border-2 border-white text-2xl ">
            Sign in
          </button>
        </Link>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="right-createacc w-full md:w-3/5 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl mt-12 font-bold pb-8">
          Create Account
        </h1>
        <div className="signin-options flex space-x-4 lg:space-x-8">
          <a href="https://vkrx5omg34.execute-api.ap-south-1.amazonaws.com/latest/login/linkedin">
            <img className="object-contain" src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://vkrx5omg34.execute-api.ap-south-1.amazonaws.com/latest/login/google">
            <img className="object-contain" src={google} alt="Google" />
          </a>
          <img className="object-contain opacity-25" src={fb} alt="Facebook" />
        </div>
        <p className="py-10 text-xl">or use your email for registration</p>
        <form className="py-2 flex flex-col px-4 md:px-0">
          <input type="text" placeholder="Name" id="name-input" required />{" "}
          <br />
          <input type="email" placeholder="Email" id="email-input" required />
          <input
            type="password"
            placeholder="Password"
            id="password-input"
            required
          />
          <select
            className="py-2 text-gray-500 text-xl border-none w-full"
            id="occupation-input"
          >
            <option defaultValue>Occupation</option>
            <option value="teacher">teacher</option>
          </select>
          <input
            type="text"
            placeholder="Phone Number"
            id="phone-input"
            required
          />
        </form>
        <p className="py-10 text-2xl underline leading-3">
          Forget your password?
        </p>
        <button
          className="rounded-full py-2 px-20 text-2xl mb-4"
          onClick={handleRegisterSubmission}
          disabled={disabled}
        >
          {message}
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
