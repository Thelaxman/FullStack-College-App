function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-6">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  ">
          <h1 className="w-20 mx-auto mt-[-3rem] bg-white text-2xl font-bold">
            Entertainment Arts
          </h1>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <h1 className="w-20 mx-auto mt-[-3rem] bg-white text-2xl font-bold">
            Business
          </h1>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <h1 className="w-20 mx-auto mt-[-3rem] bg-white text-2xl font-bold">
            Technology
          </h1>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <h1 className="w-20 mx-auto mt-[-3rem] bg-white text-2xl font-bold">
            Community Studies
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
