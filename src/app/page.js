import Hero from "@/components/Hero-Section/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>

      <div className="relative">
      </div>

      <div>
        <div className="overflow-x-hidden">
          <div className="relative h-screen">
            <img className="absolute h-[150vh] object-cover top-0 transiton ease-in duration-200  image" width="4377" src="https://miracle.sirv.com/pleiades-assets/hero-bg.jpg" alt="sun-image"/>
            <div className="hero-image-overlay"> </div>
            <Navbar/>
            <Hero/>
          </div>
        </div>
      </div>
    </div>
  );
}
