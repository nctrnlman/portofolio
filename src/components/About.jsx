import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import RhazesImage from "../assets/rhazes-image.jpg"; // Ganti dengan path yang sesuai

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] mx-auto grid sm:grid-cols-2 gap-8 p-4 text-center">
          <div className="sm:text-left text-4xl font-bold flex flex-col gap-6">
            <img
              src={RhazesImage}
              alt="Rhazes Devino"
              className="mt-4 rounded-full w-48 h-48 object-cover mx-auto"
            />
            <div className="flex items-center justify-center mt-4">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/rhazes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/nctrnlman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.instagram.com/rhazes.d/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} />
                </a>
                <a href="mailto:rhazesd@gmail.com">
                  <FaEnvelope size={30} />
                </a>
                <a
                  href="https://wa.me/6281221431716"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-justify py-4">
            <p>
              Welcome to my digital realm! I am Rhazes Devino, a dedicated
              Software Engineer with a passion for sculpting cutting-edge
              solutions that transcend expectations. My journey revolves around
              crafting software experiences that not only meet the needs of
              individuals, small businesses, and large corporations but also
              redefine the way we interact with technology. Imagine having a
              digital maestro at your service—ready to transform your ideas into
              remarkable digital realities. Let's embark on this technological
              adventure together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
