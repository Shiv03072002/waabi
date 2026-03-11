"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const innerCol = [
  { src: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=600", top: "22%" },
  { src: "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?q=80&w=600", top: "50%" },
  { src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=600", top: "76%" },
];

const edgeCol = [
  { src: "https://images.unsplash.com/photo-1542367597-8849eb950fd8?q=80&w=600", top: "8%" },
  { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600", top: "38%" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600", top: "66%" },
  { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600", top: "92%" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const centerRef = useRef(null);

  const lEdgeRefs = useRef([]);
  const lInnerRefs = useRef([]);
  const rInnerRefs = useRef([]);
  const rEdgeRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial states
    [...lEdgeRefs.current, ...lInnerRefs.current, ...rInnerRefs.current, ...rEdgeRefs.current]
      .forEach((el) => {
        gsap.set(el, {
          opacity: 0,
          visibility: "hidden",
          y: 250,
        });
      });

    gsap.set(centerRef.current, { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=1800",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Text exit
    tl.to(textRef.current, {
      y: -500,
      opacity: 0,
      ease: "none",
      duration: 1,
    });

    // Hero image shrink
    tl.to(
      imageRef.current,
      {
        inset: "4% 30% 60% 30%",
        borderRadius: "18px",
        ease: "power2.inOut",
        duration: 1.5,
      },
      "+=0.2"
    );

    // Reveal images
    tl.to(
      [
        ...lInnerRefs.current,
        ...rInnerRefs.current,
        ...lEdgeRefs.current,
        ...rEdgeRefs.current,
      ],
      {
        opacity: 1,
        visibility: "visible",
        y: 0,
        ease: "power2.out",
        duration: 1,
        stagger: 0.04,
      },
      "-=0.4"
    );

    // Center text
    tl.to(
      centerRef.current,
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.5,
      },
      "-=0.2"
    );

    // Inner column parallax (slow)
    gsap.to([...lInnerRefs.current, ...rInnerRefs.current], {
      yPercent: -120,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=1800",
        scrub: 3,
      },
    });

    // Edge column parallax (faster)
    gsap.to([...lEdgeRefs.current, ...rEdgeRefs.current], {
      yPercent: -180,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=1800",
        scrub: 2.5,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full bg-white overflow-hidden"
    >

      {/* HERO IMAGE */}
      <div
        ref={imageRef}
        className="absolute overflow-hidden"
        style={{ inset: "0%", borderRadius: "0px", zIndex: 2 }}
      >
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
          alt="truck"
          className="w-full h-full object-cover will-change-transform"
        />
      </div>

      {/* HERO TEXT */}
      <div
        ref={textRef}
        className="absolute bottom-24 left-16 max-w-4xl"
        style={{ zIndex: 10 }}
      >
        <h1 className="text-white text-7xl font-light leading-tight">
          Built to think.
          <br />
          Born to haul.
        </h1>
      </div>

      {/* LEFT EDGE */}
      <div className="absolute left-0 top-0 h-full w-[13%] overflow-hidden">
        {edgeCol.map((img, i) => (
          <div
            key={i}
            ref={(el) => (lEdgeRefs.current[i] = el)}
            className="absolute overflow-hidden shadow-sm"
            style={{ top: img.top, left: "6px", width: 130, height: 118, borderRadius: 14 }}
          >
            <img src={img.src} className="w-full h-full object-cover will-change-transform" />
          </div>
        ))}
      </div>

      {/* LEFT INNER */}
      <div className="absolute top-0 h-full left-[13%] w-[17%] overflow-hidden">
        {innerCol.map((img, i) => (
          <div
            key={i}
            ref={(el) => (lInnerRefs.current[i] = el)}
            className="absolute overflow-hidden shadow-md"
            style={{ top: img.top, left: "8px", width: 165, height: 148, borderRadius: 14 }}
          >
            <img src={img.src} className="w-full h-full object-cover will-change-transform" />
          </div>
        ))}
      </div>

      {/* RIGHT INNER */}
      <div className="absolute top-0 h-full right-[13%] w-[17%] overflow-hidden">
        {innerCol.map((img, i) => (
          <div
            key={i}
            ref={(el) => (rInnerRefs.current[i] = el)}
            className="absolute overflow-hidden shadow-md"
            style={{ top: img.top, right: "8px", width: 165, height: 148, borderRadius: 14 }}
          >
            <img src={img.src} className="w-full h-full object-cover will-change-transform" />
          </div>
        ))}
      </div>

      {/* RIGHT EDGE */}
      <div className="absolute right-0 top-0 h-full w-[13%] overflow-hidden">
        {edgeCol.map((img, i) => (
          <div
            key={i}
            ref={(el) => (rEdgeRefs.current[i] = el)}
            className="absolute overflow-hidden shadow-sm"
            style={{ top: img.top, right: "6px", width: 130, height: 118, borderRadius: 14 }}
          >
            <img src={img.src} className="w-full h-full object-cover will-change-transform" />
          </div>
        ))}
      </div>

      {/* CENTER TEXT */}
      <div
        ref={centerRef}
        className="absolute left-0 right-0 flex flex-col items-center text-center px-8"
        style={{ top: "52%", zIndex: 20 }}
      >
        <p className="text-gray-400 text-base mb-4 tracking-widest uppercase">
          We built our own road.
        </p>

        <p className="text-gray-900 text-xl leading-relaxed max-w-lg font-serif">
          Our revolutionary Physical AI Platform enables—for the first time ever—true scale,
          generalizing to different form factors, geographies, and environments. This breakthrough
          is powered by the same AI model acting as a shared brain for both autonomous trucks
          and robotaxis.
        </p>
      </div>

    </section>
  );
}