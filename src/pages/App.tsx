import ReactPlayer from "react-player";
import memoryLine from "../assets/memoryLine.png";
import frontImage from "../assets/FRONTimage.png";

function App() {
  return (
    <div className="max-w-[1000px] m-auto">
      <div className="h-full w-full bg-white z-20">
        <div className="relative z-10 flex flex-col md:flex-row w-full items-center pb-24">
          {/* <h1 className="text-5xl text-center font-bold">Alannah Mary Jane Smith</h1> */}
          <div className="flex justify-center h-52 w-52 transition-all md:h-96 md:w-96 md:shrink-0">
            <div className="w-full h-full p-2 flex items-center justify-center relative">
              <div className="">
                <img
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-10"
                  src={memoryLine}
                />
                <img
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-full "
                  src={frontImage}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-justify flex flex-col font-medium pl-14 pr-20">
            <p className="text-xl pb-5 font-medium font-mono leading-loose">
              Hello, welcome to Memory Line
            </p>
            <p className="font-mono font-medium leading-loose">
              It’s my ABSOLUTE DREAM to animate memories and permit pivotal moments of life to
              permanency through moving-image. These videos are accessible below for you to sift
              through your (and others) animated timeline. Imagine a talking, breathing, ancestry
              tree!
            </p>
          </div>
        </div>
      </div>

      <div className="flex pt-10">
        <div className="flex w-full flex-col gap-10 overflow-auto">
          {[
            {
              year: "2024",
              title: "Marilyn and David 50th Anniversery",
              link: "hthttps://youtu.be/i2aRBGEtp1o",
            },
            {
              year: "",
              title: "Dorothy and Adam’s First Anniversary",
              link: "https://youtu.be/bB6czW2Oumw",
            },
            {
              year: "2023",
              title: "What Will We Be?",
              link: "https://youtu.be/8m7alkzTpnw",
            },
            {
              year: "2022",
              title: "A Badgers Christmas",
              link: "https://youtu.be/tN1cjLMC1F8",
            },
            {
              year: "2020",
              title: "A Mothers Meeting",
              link: "https://player.vimeo.com/video/419064108",
            },
          ].map((n, i) => (
            <div className={`w-full h-full pl-2 pb-5 ${n.year && "py-10"}`} key={i}>
              <p className="font-bold text-5xl  font-mono">{n.year}</p>
              <p className="text-center font-bold text-xl font-mono pb-3">
                {n.title.toUpperCase()}
              </p>
              <div className="w-full flex items-center justify-center">
                <ReactPlayer url={n.link} controls className="w-full" />
              </div>
            </div>
          ))}
        </div>
        <div
          style={{ writingMode: "vertical-rl", textOrientation: "upright", letterSpacing: "1rem" }}
          className="text-3xl font-bold text-start px-10 shrink-0 font-mono h-fit sticky bottom-0 whitespace-nowrap"
        >
          NOW LET'S TAKE A SCROLL DOWN MEMORY LINE
        </div>
      </div>
    </div>
  );
}

export default App;
