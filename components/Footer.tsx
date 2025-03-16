import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
//
import { useState } from "react";
import animationData from "@/data/confetti.json";//

const Footer = () => {
//
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "ossautomation@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };//
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="./footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <img className="w-22 h-12 rounded-lg mx-auto mb-4 object-cover" src="./oss.jpg"/>
          <span className="text-purple">OM SRI SAI AUTOMATION </span>
        </h1>
        <p className="text-white-600  text-3xl md:mt-10 my-5 text-center">
          N0:06, PAUL RAJ NAGER, KANDANCHAVADI, CHENNAI-96
        </p>
        <p className="text-white-600  text-xl text-center">
          Contact Us:+91 8939642554,9444235822
        </p>
        <p className="text-white-600  text-xl text-center">
          Email: ossautomation@gmail.com
        </p>
        <a href="mailto:ossautomation@gmail.com">
          <MagicButton
            title={copied ? "Email is Copied!" : "Copy our email address"}
            handleClick={handleCopy}
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="!bg-[#161A31]"
          />
        </a>
        
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mr-20">
          Copyright © 2024 OSS Automation
        </p>
        <img className="w-60 h-60 rounded-lg mx-auto mt-5 mb-1 object-cover ml-40 pl-20 pr-10" src="./iso.png"/>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
    key={info.id}
    href={info.link}
    target="_blank" // Opens link in a new tab
    rel="noopener noreferrer" // Security for external links
    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
  >
    <img src={info.img} alt="icons" width={20} height={20} />
  </a>
            // <div
            //   key={info.id}
            //   className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            //   <img src={info.img} alt="icons" width={20} height={20} />
            // </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
