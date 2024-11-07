const Section3 = () => {
  return (
    <div className="bg-slate-100 mb-10">
      <div className="text-center mb-5 my-5">
        <h1 className="text-5xl text-orange-500 font-extrabold">
          WHAT WE OFFER
        </h1>
        <p className="mt-2 w-1/2 text-center justify-center mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto mt-20 h-60 ">
        {/* Card 1 */}
        <div className="bg-white p-4 mx-2 shadow-2xl hover:shadow-slate-500 rounded-lg">
          <h1>hello</h1>
          <p>jhfjdfjdgfjfbhjbjhbgfjukgbjukgbg</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-4 mx-2  shadow-2xl hover:shadow-slate-500 rounded-lg">
          <h1>hello</h1>
          <p>jhfjdfjdgfjfbhjbjhbgfjukgbjukgbg</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-4 mx-2  shadow-2xl hover:shadow-slate-500 rounded-lg">
          <h1>hello</h1>
          <p>jhfjdfjdgfjfbhjbjhbgfjukgbjukgbg</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
