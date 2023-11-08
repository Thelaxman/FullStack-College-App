import React from "react";
import {
  FaDribbbleSquare,
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          All Campuses
        </h1>
        <p className="py-4">
          {" "}
          Bow Valley College is situated in Treaty 7 territory. We honour the
          territories and Peoples of the Blackfoot Confederacy: which includes
          the Siksika, Kainai, Piikani, and Amskapi Piikani (Blackfeet) First
          Nations; as well as the Îyâxe Nakoda: which includes the Goodstoney,
          Chiniki, and Bearspaw First Nations; and the Tsuut’ina First Nation.
          We also recognize the connection and autonomy of the Métis Nation of
          Alberta within the historical Northwest Métis homeland.
        </p>
        <div className="flex justify-between w-[75%] my-6">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaDribbbleSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg: col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Student Services</h6>
          <ul>
            <li className="py-2 text-sm">Academic Services</li>
            <li className="py-2 text-sm">Finances</li>
            <li className="py-2 text-sm">New Student Orientation</li>
            <li className="py-2 text-sm">Office of the registrar</li>
            <li className="py-2 text-sm">Get Working</li>
            <li className="py-2 text-sm">Living in Calgary</li>

            <li className="py-2 text-sm">Learner Success Services</li>

            <li className="py-2 text-sm">Student Associaton</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Schools & Centres</h6>
          <ul>
            <li className="py-2 text-sm">Center of Entertainment Arts</li>
            <li className="py-2 text-sm">Chiu School of Business</li>
            <li className="py-2 text-sm">School Of Techonology</li>
            <li className="py-2 text-sm">School of Health and Wellness</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">About</h6>
          <ul>
            <li className="py-2 text-sm">Alumni</li>
            <li className="py-2 text-sm">Careers at Bow Valley College</li>
            <li className="py-2 text-sm">Faculty and Staff</li>
            <li className="py-2 text-sm">Teaching & Research</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Campuses</h6>
          <ul>
            <li className="py-2 text-sm">Calgary</li>
            <li className="py-2 text-sm">Regional Campuses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
