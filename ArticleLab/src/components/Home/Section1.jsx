const img1 = "src/assets/section1.jpg"; // Ensure this path is correct

function Section1() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 text-center p-8 rounded-full">
        <h2 className="text-4xl text-white font-bold font-sans tracking-widest ">
          {" "}
          Track your consignment
        </h2>
        <div className="flex my-6 justify-center">
          <input
            type="text"
            placeholder="Enter order number"
            className="h-16 w-3/4 placeholder:text-center text-lg placeholder:font-bold "
          />
          <button className="h-12 w-1/4 ml-4 bg-yellow-400 hover:bg-yellow-500 font-bold mt-2">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
