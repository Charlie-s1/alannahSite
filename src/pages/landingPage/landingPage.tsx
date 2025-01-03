import memeoryLine from "../../assets/memoryLine.png";
import face from "../../assets/FRONTimage.png";
import { email, instagram, vimeo, youtube } from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-10 items-center">
        <div className="w-full flex justify-center">
          <Link to={"/workshops"}>
            <h1>Workshops</h1>
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <img src={face} />
        </div>
        <div className="w-full flex justify-center">
          <Link to={"/memoryLine"}>
            <img src={memeoryLine} />
          </Link>
        </div>
      </div>
      <div className="flex absolute gap-5 bottom-5">
        {[
          { link: "https://www.youtube.com/channel/UCCOkMyAfR6vMEBYuwD0gDmA", img: youtube },
          { link: "https://instagram.com/alannahmaryjanesmith", img: instagram },
          { link: "https://vimeo.com/user84846026", img: vimeo },
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
