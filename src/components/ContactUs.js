import React from "react";
import img from "../img/contact-us.png";
import * as faicons from "react-icons/fa";

function ContactUs() {
  return (
    <div>
      <h1 class="text-center text-2xl py-4">Contact Us</h1>
      <div className="flex flex-col lg:flex-row main-text w-4/5 mx-auto">
        <div className="contact-us-left-text flex items-center justify-center flex-1">
          <p className="text-lg px-4 py-2 lg:text-2xl">
            You can register yourselves with the counselling sessions and for
            any further information, contact us through the information given
            below. We are here for you 24*7, we care for you, we hear you.
          </p>
        </div>
        <div className="contact-us-right-img flex justify-center flex-1 py-4">
          <img src={img} className="full object-contain" />
        </div>
      </div>
      <div className="footer py-4">
        <div className="flex justify-around items-center flex-col lg:flex-row">
          <div>
            <p className="text-center text-lg xl:text-2xl">
              healmymind@iventorsinitiatives.com <br /> Phone No. - xxxxxxxx
              <br /> Chennai India | <br /> Lucknow India
            </p>
          </div>
          <div className="">
            <ul className="flex lg:block justify-center py-2 space-x-4 lg:space-x-0 lg:space-y-2 text-lg underline xl:text-2xl">
              <li>FAQs</li>
              <li>IVARA</li>
              <li>MentorBaba</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <p className="text-center text-lg xl:text-2xl">
              Connect with us through WhatsApp at 24 x 7 <br /> (Link) We cant
              wait to hear from you!
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div>
            <ul className="flex justify-center text-3xl space-x-4 py-4">
              <li>
                <faicons.FaFacebookSquare />
              </li>
              <li>
                <faicons.FaInstagramSquare />
              </li>
              <li>
                <faicons.FaTwitterSquare />
              </li>
              <li>
                <faicons.FaLinkedin />
              </li>
            </ul>
          </div>
          <p className="text-center text-lg lg:text-xl">
            2021 IVentors Innitiatives Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
