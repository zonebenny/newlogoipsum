// "use client";

// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";

// const LenisScroll = ({ children }) => {
//   const lenisRef = useRef();
//   const lenis = useLenis();
//   const path = usePathname();

//   useEffect(() => {
//     if(!path?.startsWith("/why-cafs")){
//       lenisRef?.current?.lenis?.scrollTo(0, { immediate: true })
//     }
//     lenis?.start()
//   }, [path]);

//   useEffect(() => {
//     function update(time) {
//       lenisRef?.current?.lenis?.raf(time * 1000);
//     }

//     gsap.ticker.add(update);
//     return () => {
//       gsap.ticker.remove(update);
//     };
//   });

//   const options = {
//     duration: 0.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//     direction: "vertical", // vertical, horizontal
//     gestureDirection: "vertical", // vertical, horizontal, both
//     smooth: true,
//     mouseMultiplier: 0.2,
//     smoothTouch: false,
//     touchMultiplier: 0.2,
//     infinite: false,
//   };

//   return (
//     <ReactLenis root ref={lenisRef} autoRaf={false} option={options}>
//       {children}
//     </ReactLenis>
//   );
// };

// export default LenisScroll;