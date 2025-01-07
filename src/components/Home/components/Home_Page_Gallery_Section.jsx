import React from 'react'

const Home_Page_Gallery_Section = () => {
  return (
    <section className="bg-[#faf5fa] py-24">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl text-center font-bold text-[#363636]">
          Explore{" "}
          <span className="font-signature text-[#800080] text-5xl">Our</span>{" "}{" "}
          Gallery !
        </h1>
      </div>
      <div>
        <button>Contact Us</button>
      </div>
    </section>
  );
}

export default Home_Page_Gallery_Section
