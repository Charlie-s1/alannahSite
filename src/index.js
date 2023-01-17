import React from 'react';
import {createRoot} from 'react-dom/client';
import { TypeAnimation } from 'react-type-animation';
import "./index.css";

import instaLogo from "./img/instagram.png";
import vimeoLogo from "./img/vimeo.png";
import youtubeLogo from "./img/youtube.png";
import emailLogo from "./img/email.png";

import mainFace from "./img/main.png";
import eye from "./img/lEye.png";
import closeEye from "./img/eyeBlink.png";
import pupil from "./img/pupil.png";
import smile from "./img/smile.png";
import eyeBack from "./img/eyeBackground.png";
// import smSmile from "./img/smSmile.png";
import talk from "./img/talk.gif";
import relaxEye from "./img/relaxEye.png"
import closeSmile from "./img/closeSmile.png"

let images = [
  mainFace,
  eye,
  closeEye,
  pupil,
  smile,
  eyeBack,
  talk,
  relaxEye,
  closeSmile
]

function mountImages(){
  const toRet = images.map((i)=>{
    const img = new Image();
    img.src = i;
    img.draggable = false;
    return img;
  });
  return toRet;
}

class Face extends React.Component{
  constructor(props){
    super(props);
    this.lEyeRef = this.props.lEyeRef;
    this.rEyeRef = this.props.rEyeRef;
    this.faceRef = this.props.faceRef;
    this.state={
      hover:false,
      lEyeHover:false,
      rEyeHover:false,
      imgLoaded:[],
    }

    this.images = mountImages();
  }
  checkLoad(e){
    const toLoad=["instagramLogo","youtubeLogo","emailLogo","vimeoLogo","mainFace"]
    this.state.imgLoaded.push(e.target.id);
    if(JSON.stringify(this.state.imgLoaded.sort())==JSON.stringify(toLoad.sort())){
      this.props.onLoad();
    }
  }
  render(){
    return(
      <div id="FaceCont"
        style={this.props.loaded ? {display:"flex"} : {display:"none"}}
      >
        <div className="link" 
          onMouseEnter={(e)=>{this.state.hover=true}}
          onMouseLeave={(e)=>{this.state.hover=false}}
        >
          <h1>PORTFOLIO</h1>
        </div>
        <div id="face" ref={this.faceRef}>
          <img draggable={false} id="mainFace" onLoad={(e)=>this.checkLoad(e)} src={mainFace}/>
          <div id="faceParts">
            <div id="lEyeCont" ref={this.lEyeRef}>
              <div id="lEye"
                onMouseEnter={()=>{this.state.lEyeHover=true}}
                onMouseLeave={()=>{this.state.lEyeHover=false}}
              >
                <img draggable={false} id="leftEyeBack" src={eyeBack}></img>
                <div style={{transform:`rotate(${this.props.lRot}deg)`}} className="eye" id="lPupilCont">
                  <img style={{left:`${this.props.pupilPosX}%`,top:`${this.props.pupilPosY}%`}} draggable={false} id="lPupil" src={pupil}/>
                </div>
                <img 
                  draggable={false} 
                  id="leftEyeImg" 
                  style={this.props.hovering ? (this.state.lEyeHover ? {height:"150%"} : null) : {left:"-15%",maxWidth:"105%"}} 
                  src={this.props.hovering ? (this.state.lEyeHover ? closeEye : eye) : relaxEye}
                />

              </div>
            </div>
            <div id="rEyeCont" ref={this.rEyeRef}>
              <div id="rEye"
                onMouseEnter={()=>{this.state.rEyeHover=true}}
                onMouseLeave={()=>{this.state.rEyeHover=false}}
              >
                <img draggable={false} id="rightEyeBack" src={eyeBack}></img>
                <div  style={{transform:`rotate(${this.props.rRot}deg)`}} className="eye" id="rPupilCont">
                  <img style={{left:`${this.props.pupilPosX}%`,top:`${this.props.pupilPosY}%`}} draggable={false} id="rPupil" src={pupil}/>
                </div>
                <img 
                  draggable={false} 
                  id="rightEyeImg"
                  style={this.props.hovering ? (this.state.rEyeHover ? {height:"150%"} : null) : {left:"10%",maxWidth:"105%"}} 
                  src={this.props.hovering ? (this.state.rEyeHover ? closeEye : eye) : relaxEye}
                />
              </div>
            </div>
            <div id="mouthCont">
              <img draggable={false} id="mouth" src={this.props.hovering ? (this.state.hover ? smile : (this.props.talking && this.props.loaded) ? talk : closeSmile) : (this.props.talking && this.props.loaded) ? talk : smile}></img>
            </div>
            
            
            {/* <div id="smile" style={{opacity:`${this.state.hover ? 1:0}`}}>
              <img src={smile}/>
            </div> */}
          </div>
          
        </div>
        
        <div className="link" id="socialLinks">
          <div>
            <a href="https://instagram.com/a.m.jane.smith">
              <img
                id="instagramLogo"
                onLoad={(e)=>this.checkLoad(e)}
                src={instaLogo}
                onMouseEnter={(e)=>{this.state.hover=true}}
                onMouseLeave={(e)=>{this.state.hover=false}}
              />
            </a>
          </div>
          <div>
            <a href="https://vimeo.com/user84846026">
            <img
              id="vimeoLogo"
              onLoad={(e)=>this.checkLoad(e)}
              src={vimeoLogo}
              onMouseEnter={(e)=>{this.state.hover=true}}
              onMouseLeave={(e)=>{this.state.hover=false}}
            />
            </a>
          </div>
          <div id="youtubeLogo">
            <a href="https://www.youtube.com/@alannahsmith1294">
              <img
                id="youtubeLogo"
                onLoad={(e)=>this.checkLoad(e)}
                src={youtubeLogo}
                onMouseEnter={(e)=>{this.state.hover=true}}
                onMouseLeave={(e)=>{this.state.hover=false}}
              />
            </a>
          </div>
          <div>
            <a href="mailto:alannah.smith@ntlworld.com">
              <img
                id="emailLogo"
                onLoad={(e)=>this.checkLoad(e)}
                src={emailLogo}
                onMouseEnter={(e)=>{this.state.hover=true}}
                onMouseLeave={(e)=>{this.state.hover=false}}
              />
            </a>
          </div>
        </div>
        
      </div>
    )
  }
}


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      talking:true,
      showing:"",
      lRot:0,
      rRot:0,
      pupilPosX:50,
      pupilPosY:50,
      hovering:false,
      loaded:false,
    }
    this.lEyeRef = React.createRef();
    this.rEyeRef = React.createRef();
    this.faceRef = React.createRef();
  }
  /**
   * move eye pupil 
   */
  mouseMoving(e){
    let lDifX = (this.faceRef.current.offsetLeft + (this.lEyeRef.current.offsetLeft + this.lEyeRef.current.offsetWidth/2)) - e.pageX;
    let lDifY = (this.faceRef.current.offsetTop + (this.lEyeRef.current.offsetTop + this.lEyeRef.current.offsetHeight/2)) - e.pageY;
    let rDifX = (this.faceRef.current.offsetLeft + (this.rEyeRef.current.offsetLeft + this.rEyeRef.current.offsetWidth/2)) - e.pageX;
    let rDifY = (this.faceRef.current.offsetTop + (this.rEyeRef.current.offsetTop + this.rEyeRef.current.offsetHeight/2)) - e.pageY;


    let lAngle = (Math.atan2(lDifX,lDifY)*180)/Math.PI;
    let rAngle = (Math.atan2(rDifX,rDifY)*180)/Math.PI;
    this.setState({
      lRot:-lAngle,
      rRot:-rAngle,
    })
  }
  /**
   * stop mouth moving when done talking
   */
  talking(){
    setTimeout(()=>{
      this.setState({talking:false})
    },3500);
  }

  render(){
    return(
      <div id="main"
        
        onMouseMove={(e)=>this.mouseMoving(e)}
        onMouseLeave={(e)=>{this.setState({hovering:false,pupilPosX:50,pupilPosY:50})}}
        onMouseEnter={(e)=>{this.setState({hovering:true,pupilPosX:50,pupilPosY:25})}}
        
      >
         
        <Face
          onLoad={(e)=>{
            this.setState({loaded:true})
            this.talking();
          }}
          loaded={this.state.loaded}
          talking={this.state.talking}
          lRot={this.state.lRot}
          rRot={this.state.rRot}
          pupilPosX={this.state.pupilPosX}
          pupilPosY={this.state.pupilPosY}
          rEyeRef = {this.rEyeRef}
          lEyeRef = {this.lEyeRef}
          faceRef = {this.faceRef}
          hovering = {this.state.hovering}
        />
        {!this.state.loaded ? <Loading/> : null}
        <Talk
          loaded={this.state.loaded}
        />
        
      </div>
    )
  }
}

class Talk extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="speechCont"
        style={this.props.loaded ? {display:"flex"} : {display:"none"}}
      >
        {this.props.loaded ?
        <TypeAnimation
          sequence={[
            "Hi, my name is Alannah. Have a look around!",
          ]}
          wrapper="div"
          className="speech"
          cursor={false}
          speed={35}
        /> : null}
        <div id="speechPointBorder"></div>
        <div id="speechPoint"></div>
      </div>
    )
  }
    
}

function Loading(props){
  return(
    <div id="loadingScreen">
      <TypeAnimation
        sequence={[
          "",100,
          "Loading",
          1000,
          "Loading.",
          250,
          "Loading..",
          250,
          "Loading...",
          250
        ]}
        repeat={Infinity}
        // cursor={false}
        speed={5}
        deletionSpeed={1}
      />
    </div>
  )
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <Main/>
)