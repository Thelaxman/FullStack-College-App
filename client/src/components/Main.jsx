import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto my-4 md:grid-cols-2">
        <img src={logo} alt="logo" />
        <div className="flex flex-col justify-center">
          <h1>Students Dashboard</h1>
          <p className="text-[#00df9a]">
            Learn more about Bow Valley College and how to apply by contacting
            us today.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black">
            <Link to="/Login">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
