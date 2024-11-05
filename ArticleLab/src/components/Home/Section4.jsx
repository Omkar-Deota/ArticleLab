const img1 = "src/assets/section1.jpg";
const Section4=()=> {
  return (
    <div className="mb-10  ">
      <div className="text-center mb-5 ">
        <h1 className="text-5xl text-orange-500 font-extrabold">ABOUT US</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <img src={img1} alt="section4" />
      <div className="grid grid-cols-4 gap-1 mx-auto mt-20 text-center ">
        <div className="block">
          <h1 className="text-4xl text-orange-500">10+</h1>
          <span>years of experience</span>
        </div>
        <div>
          <h1 className="text-4xl text-orange-500">10+</h1>
          <span>years of experience</span>
        </div>
        <div>
          <h1 className="text-4xl text-orange-500">10+</h1>
          <span>years of experience</span>
        </div>
        <div>
          <h1 className="text-4xl text-orange-500">10+</h1>
          <span>years of experience</span>
        </div>
      </div>
    </div>
  );
}

export default Section4;
