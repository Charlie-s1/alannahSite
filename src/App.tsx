import ReactPlayer from "react-player";
import memoryLine from "./assets/memoryLine.png";
import frontImage from "./assets/FRONTimage.png";

function App() {
  return (
    <div className="bg-[#ffea00] min-h-screen">
      <div className="relative h-full w-full">
        <div className="relative z-10 w-full flex flex-col">
          <h1 className="text-5xl text-center font-bold">Alannah Mary Jane Smith</h1>
          <div className="flex justify-center w-full">
            <div className="w-1/2">
              <img src={memoryLine} />
            </div>
          </div>
        </div>
        <img className="absolute z-0 top-0 left-0 h-full" src={frontImage} alt="" />
      </div>
      <div className="text-center">
        <p>Hello</p>
        <p>
          It’s my ABSOLUTE DREAM to animate memories and permit pivotal moments of life to
          permanency through moving-image.
        </p>
        <p>
          These videos are accessible below for you to sift through your (and others) animated
          timeline.
        </p>
        <p>Imagine a talking, breathing, ancestry tree!</p>
      </div>

      <div className="flex pt-10">
        <div
          style={{ writingMode: "vertical-rl", textOrientation: "upright", letterSpacing: "1rem" }}
          className="text-xl font-bold px-10 shrink-0"
        >
          NOW LET'S TAKE A SCROLL DOWN MEMORY LINE
        </div>
        <div className="flex w-full flex-col gap-10">
          {[
            {
              year: "2024",
              title: "Dorothy and Adam’s First Anniversary",
              link: "https://player.vimeo.com/video/1007987708",
            },
            {
              year: "2023",
              title: "What Will We Be?",
              link: "https://vimeo.com/840061845",
            },
            {
              year: "2022",
              title: "A Badgers Christmas",
              link: "https://vimeo.com/780842477",
            },
            {
              year: "2020",
              title: "A Mothers Meeting",
              link: "https://player.vimeo.com/video/419064108",
            },
          ].map((n, i) => (
            <div className="w-full h-full pl-2" key={i}>
              <p className="font-bold text-5xl">{n.year}</p>
              <p className="text-center font-bold text-xl">{n.title.toUpperCase()}</p>
              <div className="w-full flex items-center justify-center">
                <ReactPlayer url={n.link} controls className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
