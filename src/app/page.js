import Collaboration from "@/components/Collaboration/Collaboration";
import Hero from "@/components/Hero-Section/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Productivity from "@/components/Productivity/Productivity";

export default function Home() {
  return (
    <div>

      <div className="relative">
      </div>

      <div>
        <div className="overflow-x-hidden">
          <div className="relative h-screen w-full">
            <img className="absolute md:h-[150vh] h-[100vh]  w-full object-cover md:-top-[480px] -top-0  transiton ease-in duration-200  image" width="4377" src="https://miracle.sirv.com/pleiades-assets/hero-bg.jpg" alt="sun-image"/>
            <div className="hero-image-overlay"> </div>
            <Navbar/>
            <Hero/>
          
          </div>
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity/>
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Collaboration/>
          </div>
        </div>
      </div>
    </div>
  );
}
