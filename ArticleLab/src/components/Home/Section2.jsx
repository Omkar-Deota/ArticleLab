const img1 = "src/assets/section1.jpg";

function Section2() {
  return (
    <>
      <div className="grid grid-cols-3 gap-1 -mt-5 px-4 mb-8 h-screen">
        <div className="z-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:animate-appearance-in  ">
            <img
              className="w-full h-48 object-cover"
              src={img1}
              alt="Card Image"
            />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
        <div className="z-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:animate-appearance-in ">
            <img
              className="w-full h-48 object-cover"
              src={img1}
              alt="Card Image"
            />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
        <div className="z-10">
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:animate-appearance-in">
            <img
              className="w-full h-48 object-cover"
              src={img1}
              alt="Card Image"
            />
            <p className="text-center">hfjghdfgh</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
