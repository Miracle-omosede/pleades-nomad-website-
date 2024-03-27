import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <div className="relative">
        {/* <div className="">
            <Navbar/>
        </div> */}
      </div>
      <div>
        <div className="overflow-x-hidden">
          <div className="relative h-screen">
            <img className="absolute transiton ease-in duration-200 max-xl:right-[1050px] xl:right-[-970px] image" width="4377" src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" alt="sun-image"/>
            <Navbar/>
          </div>
        </div>
      </div>
    </div>
  );
}
