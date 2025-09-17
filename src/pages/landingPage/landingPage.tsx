import memeoryLine from "../../assets/memoryLine.png";
import workshopsTitle from "../../assets/workshopTitle.png";
import face from "../../assets/FRONTimage.png";
import { email, instagram, vimeo, youtube } from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full h-screen flex flex-col  items-center justify-between">
      <h1 className="font-mono text-4xl -mb-24 text-red-700 p-10 pt-20 pb-0 text-center">
        Alannah Mary Jane Smith
      </h1>
      <div className="flex flex-col md:flex-row w-[40%] sm:w-[30%] md:w-full h-full gap-5 items-center justify-center">
        {/* <div className="w-full flex flex-shrink justify-center"> */}
        <div className="w-full md:hidden flex justify-center relative">
          <img src={face} />
        </div>
        <Link to={"/workshops"}>
          <img src={workshopsTitle}></img>
          {/* <h1>Workshops</h1> */}
        </Link>
        {/* </div> */}
        <div className="w-full hidden md:flex justify-center">
          <img src={face} />
        </div>
        {/* <div className="w-full flex justify-center"> */}
        <Link to={"/memoryLine"}>
          <img src={memeoryLine} />
        </Link>
        {/* </div> */}
      </div>
      <div className="absolute flex gap-5 bottom-14 h-10">
        {[
          { link: "https://www.youtube.com/channel/UCCOkMyAfR6vMEBYuwD0gDmA", img: youtube },
          { link: "https://www.instagram.com/alannahmaryjane", img: instagram },
          // { link: "https://vimeo.com/user84846026", img: vimeo },
          { link: "mailto:me@alannahmaryjane.com", img: email },
        ].map((n, i) => (
          <Link key={i} className="w-20 h-20" to={n.link}>
            <img src={n.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { LandingPage };
