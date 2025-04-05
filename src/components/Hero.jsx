import { useEffect, useState } from "react";

const Hero = () => {
  const targetDate = new Date("2025-05-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / (1000 * 60)) % 60);
        const secs = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, mins, secs });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative overflow-hidden text-white bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-24 text-center px-6">
   
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,181.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

   
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Step Into the Future of Innovation</h1>
        <p className="text-lg md:text-xl mb-6">
          Join 5,000+ tech leaders, developers, and innovators in a 3-day immersive experience.
        </p>
        <p className="mb-6 text-lg font-medium">
          📅 May 15–17, 2025 | 📍 Toronto Convention Centre
        </p>

        <button className="btn btn-primary text-white mb-10">Register Now</button>


        <div className="flex justify-center gap-6 text-xl font-semibold">
          <div>
            <span className="countdown font-mono text-3xl">
              <span style={{ "--value": timeLeft.days }}></span>
            </span>
            <div>Days</div>
          </div>
          <div>
            <span className="countdown font-mono text-3xl">
              <span style={{ "--value": timeLeft.hours }}></span>
            </span>
            <div>Hours</div>
          </div>
          <div>
            <span className="countdown font-mono text-3xl">
              <span style={{ "--value": timeLeft.mins }}></span>
            </span>
            <div>Min</div>
          </div>
          <div>
            <span className="countdown font-mono text-3xl">
              <span style={{ "--value": timeLeft.secs }}></span>
            </span>
            <div>Sec</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
