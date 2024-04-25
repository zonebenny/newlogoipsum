"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Videosection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#grow",
        scrub: 1.5,
        start: "top bottom",
        end: "+=400",
        once:true,
        onEnter: () => {
          const video = videoRef.current;
          video.play();
          setIsPlaying(true);
        },
        onLeaveBack: () => {
          const video = videoRef.current;
          video.pause();
          setIsPlaying(false);
        }
      }
    });

    growTl.to("#grow", {
      duration: 1,
      scale: 1.16,
    });
  }, []);

  return (
    <section className="w-full max-w-[1640px] m-auto">
      <figure className="relative pb-[56.22%]">
        <video
          ref={videoRef}
          src="/wedding-video.mp4"
          loop
          muted
          alt="Wedding Video"
          id="grow"
          className="absolute top-0 left-0 w-full h-full cursor-pointer rounded-lg scale-75"
          onClick={togglePlayPause}
        ></video>
        <button onClick={togglePlayPause} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? (
            <Image src="/pause-button.svg" width="100" height="100" alt="Pause" className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]' />
          ) : (
            <Image src="/play-button.svg" width="100" height="100" alt="Play" className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]' />
          )}
        </button>
      </figure>
    </section>
  );
};

export default Videosection;







// "use client"
// import Image from 'next/image';
// import { useState } from 'react';

// const Videosection = () => {
//   const [isPlaying, setIsPlaying] = useState(true);

//   const togglePlayPause = () => {
//     const video = document.getElementById('video');

//     if (isPlaying) {
//       video.pause();
//     } else {
//       video.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="w-full max-w-[1640px] m-auto">
//       <figure className="relative pb-[56.22%]">
//         <video id="video" src="/wedding-video.mp4" loop autoPlay muted alt="video Section" className="absolute top-0 left-0 w-full h-full"></video>
//         <button onClick={togglePlayPause} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           {isPlaying ? (
//             <Image src="/pause-button.svg" width="50" height="50" alt="Pause" />
//           ) : (
//             <Image src="/play-button.svg" width="50" height="50" alt="Play" />
//           )}
//         </button>
//       </figure>
//     </div>
//   );
// };

// export default Videosection;
