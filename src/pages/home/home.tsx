import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
// import "./home.css";

import instaLogo from "../../assets/icons/instagram.png";
import vimeoLogo from "../../assets/icons/vimeo.png";
import youtubeLogo from "../../assets/icons/youtube.png";
import emailLogo from "../../assets/icons/email.png";

import mainFace from "../../assets/img/main.png";
import eye from "../../assets/img/lEye.png";
import closeEye from "../../assets/img/eyeBlink.png";
import pupil from "../../assets/img/pupil.png";
import smile from "../../assets/img/smile.png";
import eyeBack from "../../assets/img/eyeBackground.png";
// import smSmile from "../assets/img/smSmile.png";
import talk from "../../assets/img/talk.gif";
import relaxEye from "../../assets/img/relaxEye.png";
import closeSmile from "../../assets/img/closeSmile.png";
import { Link } from "react-router-dom";

// let images = [mainFace, eye, closeEye, pupil, smile, eyeBack, talk, relaxEye, closeSmile];

// function mountImages() {
//   const toRet = images.map((i) => {
//     const img = new Image();
//     img.src = i;
//     img.draggable = false;
//     return img;
//   });
//   return toRet;
// }

const Face = (props: {
  onLoad: () => void;
  loaded: boolean;
  talking: boolean;
  lRot: number;
  rRot: number;
  pupilPosX: number;
  pupilPosY: number;
  rEyeRef: any;
  lEyeRef: any;
  faceRef: any;
  hovering: boolean;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isLoaded] = useState(true);
  const [lEyeHover, setLEyeHover] = useState(false);
  const [rEyeHover, setREyeHover] = useState(false);

  useEffect(() => {
    props.onLoad();
  }, []);

  return (
    <div id="FaceCont" style={isLoaded ? { display: "flex" } : { display: "none" }}>
      <Link to="/memoryLane">
        <div
          className="link"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <h1>MEMORY LINE</h1>
        </div>
      </Link>
      <div id="face" ref={props.faceRef}>
        <img draggable={false} id="mainFace" src={mainFace} />
        <div id="faceParts">
          <div id="lEyeCont" ref={props.lEyeRef}>
            <div
              id="lEye"
              onMouseEnter={() => {
                setLEyeHover(true);
              }}
              onMouseLeave={() => {
                setLEyeHover(false);
              }}
            >
              <img draggable={false} id="leftEyeBack" src={eyeBack}></img>
              <div
                style={{ transform: `rotate(${props.lRot}deg)` }}
                className="eye"
                id="lPupilCont"
              >
                <img
                  style={{ left: `${props.pupilPosX}%`, top: `${props.pupilPosY}%` }}
                  draggable={false}
                  id="lPupil"
                  src={pupil}
                />
              </div>
              <img
                draggable={false}
                id="leftEyeImg"
                style={
                  props.hovering
                    ? lEyeHover
                      ? { height: "150%" }
                      : {}
                    : { left: "-15%", maxWidth: "105%" }
                }
                src={props.hovering ? (lEyeHover ? closeEye : eye) : relaxEye}
              />
            </div>
          </div>
          <div id="rEyeCont" ref={props.rEyeRef}>
            <div
              id="rEye"
              onMouseEnter={() => {
                setREyeHover(true);
              }}
              onMouseLeave={() => {
                setREyeHover(false);
              }}
            >
              <img draggable={false} id="rightEyeBack" src={eyeBack}></img>
              <div
                style={{ transform: `rotate(${props.rRot}deg)` }}
                className="eye"
                id="rPupilCont"
              >
                <img
                  style={{ left: `${props.pupilPosX}%`, top: `${props.pupilPosY}%` }}
                  draggable={false}
                  id="rPupil"
                  src={pupil}
                />
              </div>
              <img
                draggable={false}
                id="rightEyeImg"
                style={
                  props.hovering
                    ? rEyeHover
                      ? { height: "150%" }
                      : {}
                    : { left: "10%", maxWidth: "105%" }
                }
                src={props.hovering ? (rEyeHover ? closeEye : eye) : relaxEye}
              />
            </div>
          </div>
          <div id="mouthCont">
            <img
              draggable={false}
              id="mouth"
              src={
                props.hovering
                  ? isHover
                    ? smile
                    : props.talking && props.loaded
                    ? talk
                    : closeSmile
                  : props.talking && props.loaded
                  ? talk
                  : smile
              }
            ></img>
          </div>

          {/* <div id="smile" style={{opacity:`${this.state.hover ? 1:0}`}}>
              <img src={smile}/>
            </div> */}
        </div>
      </div>

      <div className="link" id="socialLinks">
        <div>
          <a href="https://instagram.com/alannahmaryjanesmith">
            <img
              id="instagramLogo"
              src={instaLogo}
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            />
          </a>
        </div>
        <div>
          <a href="https://vimeo.com/user84846026">
            <img
              id="vimeoLogo"
              src={vimeoLogo}
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            />
          </a>
        </div>
        <div id="youtubeLogo">
          <a href="https://www.youtube.com/channel/UCCOkMyAfR6vMEBYuwD0gDmA">
            <img
              id="youtubeLogo"
              src={youtubeLogo}
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            />
          </a>
        </div>
        <div>
          <a href="mailto:me@alannahmaryjane.com">
            <img
              id="emailLogo"
              src={emailLogo}
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [lRot, setlRot] = useState(0);
  const [rRot, setrRot] = useState(0);
  const [pupilPosX, setPupilPosX] = useState(0);
  const [pupilPosY, setPupilPosY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const lEyeRef = useRef<any>(null);
  const rEyeRef = useRef<any>(null);
  const faceRef = useRef<any>(null);

  function mouseMoving(e: any) {
    if (!faceRef?.current || !lEyeRef?.current || !rEyeRef?.current) return;
    let lDifX =
      faceRef.current.offsetLeft +
      (lEyeRef.current.offsetLeft + lEyeRef.current.offsetWidth / 2) -
      e.pageX;
    let lDifY =
      faceRef.current.offsetTop +
      (lEyeRef.current.offsetTop + lEyeRef.current.offsetHeight / 2) -
      e.pageY;
    let rDifX =
      faceRef.current.offsetLeft +
      (rEyeRef.current.offsetLeft + rEyeRef.current.offsetWidth / 2) -
      e.pageX;
    let rDifY =
      faceRef.current.offsetTop +
      (rEyeRef.current.offsetTop + rEyeRef.current.offsetHeight / 2) -
      e.pageY;

    let lAngle = (Math.atan2(lDifX, lDifY) * 180) / Math.PI;
    let rAngle = (Math.atan2(rDifX, rDifY) * 180) / Math.PI;
    setlRot(-lAngle);
    setrRot(-rAngle);
  }

  function talking() {
    setTimeout(() => {
      setIsTalking(false);
    }, 3500);
  }
  return (
    <div
      id="main"
      onMouseMove={mouseMoving}
      onMouseLeave={() => {
        setIsHovering(false);
        setPupilPosX(50);
        setPupilPosY(50);
      }}
      onMouseEnter={() => {
        setIsHovering(true);
        setPupilPosX(50);
        setPupilPosY(25);
      }}
    >
      <Face
        onLoad={() => {
          setIsLoaded(true);
          talking;
          talking();
        }}
        loaded={isLoaded}
        talking={isTalking}
        lRot={lRot}
        rRot={rRot}
        pupilPosX={pupilPosX}
        pupilPosY={pupilPosY}
        rEyeRef={rEyeRef}
        lEyeRef={lEyeRef}
        faceRef={faceRef}
        hovering={isHovering}
      />
      {!isLoaded ? <Loading /> : null}
      <Talk isLoaded={isLoaded} />
    </div>
  );
};

const Talk = (props: { isLoaded: boolean }) => {
  return (
    <div id="speechCont" style={props.isLoaded ? { display: "flex" } : { display: "none" }}>
      {props.isLoaded ? (
        <TypeAnimation
          sequence={["Hi, my name is Alannah. Have a look around!"]}
          wrapper="div"
          className="speech"
          cursor={false}
          speed={35}
        />
      ) : null}
      <div id="speechPointBorder"></div>
      <div id="speechPoint"></div>
    </div>
  );
};

const Loading = () => {
  return (
    <div id="loadingScreen">
      <TypeAnimation
        sequence={["", 100, "Loading", 1000, "Loading.", 250, "Loading..", 250, "Loading...", 250]}
        repeat={Infinity}
        // cursor={false}
        speed={5}
        deletionSpeed={1}
      />
    </div>
  );
};

export { Main };
