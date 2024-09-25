import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Hero() {
  const [text] = useTypewriter({
    words: ["working", "contributing", "earning", "succeeding", "winning"],
    loop: {},
    typeSpeed: 40,
    delaySpeed: 70,
  });

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold">
          Programs designed to let you do the job on day one.
        </p>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Hit the ground <span>{text}</span>{" "}
            <span>
              <Cursor />
            </span>
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Find the program that makes the best of your time.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          <Link to="/Programs">Learn More</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
