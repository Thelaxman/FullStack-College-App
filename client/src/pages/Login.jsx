import { useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import Technology from "../assets/Technology.jpg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, Setdata] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        Setdata({});
        navigate("/Programs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${Technology})` }}
      className="text-white h-[100vh] w-full flex justify-center items-center bg-cover 
 "
    >
      <div
        className=" bg-slate-800 border border-slate-400
      rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative "
      >
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Login
        </h1>
        <div className="relative my-4">
          <input
            type="email"
            value={data.email}
            onChange={(e) => Setdata({ ...data, email: e.target.value })}
            className="block-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300
            appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
          />
          <label
            htmlFor=""
            className="absolute  text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-6 "
          >
            Email
          </label>
          <BiUser className="absolute top-4 right-4" />
        </div>
        <div className="relative my-4">
          <input
            type="password"
            value={data.password}
            onChange={(e) => Setdata({ ...data, password: e.target.value })}
            className="block-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300
            appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
          />
          <label
            htmlFor=""
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
            peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-6 "
          >
            Password
          </label>
          <AiOutlineLock className="absolute top-4 right-4" />
        </div>
        <div className="flex justify-between items-center gap-6">
          <div className="flex  items-center ">
            <input type="checkbox" name="" id="" />
            <label htmlFor="RememberMe">Remember Me</label>
          </div>
          <Link to="" className="text-blue-500">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          onClick={loginUser}
          className="w-full mb-4 text-[18px] mt-6 rounded-full bg-[#00df9a] text-white hover:bg-emerald-600 py-2 transition-colors duration-300"
        >
          Login
        </button>
        <div>
          <span className="m-4">
            New here?
            <Link to="/Register" className="text-blue-500">
              Create an Account
            </Link>
          </span>
        </div>
        <form action=""></form>
      </div>
    </div>
  );
}

export default Login;
