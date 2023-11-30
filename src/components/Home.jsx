import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "typed.js";
import ResumeFile from "../assets/file/cv.pdf";

const Home = () => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    // Konfigurasi Typed.js
    const options = {
      strings: ["I'm a Full Stack Developer."],
      typeSpeed: 100, // Kecepatan pengetikan (ms per karakter)
      backSpeed: 100, // Kecepatan penghapusan (ms per karakter)
      showCursor: true, // Menampilkan kursor
      cursorChar: "|", // Karakter kursor
      loop: true, // Mengulang ketik
    };

    // Inisialisasi Typed.js
    const typed = new Typed(".full-stack-text", options);

    // Hentikan Typed.js setelah komponen di-unmount
    return () => {
      typed.destroy();
    };
  }, []); // Efek hanya dijalankan sekali setelah render pertama

  const handleDownload = () => {
    if (!downloaded) {
      const link = document.createElement("a");
      link.href = ResumeFile;
      link.download = "Rhazes_Devino_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloaded(true);
    }
  };

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rhazes Devino
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] full-stack-text">
          {/* Teks akan diisi oleh Typed.js */}
        </h2>
        {/* <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full-stack developer with a specialization in crafting
          exceptional digital experiences, occasionally dipping into the realm
          of design. Currently, my focus revolves around building responsive
          full-stack web applications.
        </p> */}
        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            onClick={handleDownload}
          >
            View Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
