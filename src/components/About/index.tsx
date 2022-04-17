import React from "react";

// import { Container } from './styles';

const buttonStyle = "p-2 border text-right text-sm cursor-pointer hover:bg-gray-600 hover:text-gray-100";

const About: React.FC = () => {
  const getYear = () => {
    const today = new Date();
    const birth = new Date(1989, 2, 1);
    let years = today.getFullYear() - birth.getFullYear();

    if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) years--;

    return years;
  };

  return (
    <div className="flex flex-col justify-center w-2/5 mb-4">
      {/* About title */}
      <div className="flex-col text-right">
        <div className="text-lg font-bold">about me</div>
      </div>
      {/* Separator */}
      <div className="mb-2 text-right">.</div>
      {/* About content */}
      <div className="text-md text-gray-600 text-justify">
        <b className="text-md">Hi! I'm a full stack developer who searches for new and promising technologies to build and enhance my knowledge and projects that I participate.</b>
        <br />
        <br />
        I'm {getYear()} years old programmer from Brazil who studied in Universidade de Pernambuco for my bachelor's degree, and since have been working and learning new
        technologies related to the IT industry with no prejudice from any area: frontend, backend, mobile or whatever. <br />
        <b>If it's cool, i'm in.</b>
        <br />
        <br />
        If you want to contact me for any reason, feel free to do it, I'm always looking for new opportunities and things to do. At the bottom you can find some links to my social
        networks and other useful content.
      </div>
      {/* Button wrapper */}
      <div className="flex flex-row justify-end mt-4 gap-4">
        <div className={buttonStyle} onClick={() => window.open("https://github.com/brunocharamba", "_blank")}>
          GITHUB
        </div>
        <div className={buttonStyle} onClick={() => window.open("mailto:brunocharamba@gmail.com")}>
          SEND EMAIL
        </div>
        <div className={buttonStyle} onClick={() => console.log("download resume")}>
          DOWNLOAD RESUME
        </div>
      </div>
    </div>
  );
};

export default About;