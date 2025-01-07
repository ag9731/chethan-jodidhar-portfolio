import React from 'react'
import { FaLinkedin, FaInstagram,FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-[#363636] py-10 flex justify-center items-center" >
      <footer className="container mx-auto items-center justify-center flex flex-col gap-10">
        {/* social icons */}
        <div className="flex gap-10 items-center justify-center">
          <FaFacebook className="fill-[#800080] bg-white p-1 text-4xl rounded-xl" />
          <FaInstagram className="fill-[#800080] bg-white p-1 text-4xl rounded-xl" />
          <FaYoutube className="fill-[#800080] bg-white p-1 text-4xl rounded-xl" />
          <FaTwitter className="fill-[#800080] bg-white p-1 text-4xl rounded-xl" />
        </div>
        <div>
          <p className='text-white text-center'>Copyright Chetan Cinemas © 2025. All rights reserved.</p>
        </div>
        <div></div>
      </footer>
    </main>
  );
}

export default Footer
