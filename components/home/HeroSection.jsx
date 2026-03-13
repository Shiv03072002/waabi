"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroColumns from "./HeroColumns";


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

    // ── Initial states ──────────────────────────────────────────────────────
    [
      ...lEdgeRefs.current,
      ...lInnerRefs.current,
      ...rInnerRefs.current,
      ...rEdgeRefs.current,
    ].forEach((el) => {
      gsap.set(el, { opacity: 0, visibility: "hidden", y: 250 });
    });

    gsap.set(centerRef.current, { opacity: 0, y: 30 });

    // ── Pinned scroll timeline ───────────────────────────────────────────────
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

    // 1. Text exit
    tl.to(textRef.current, {
      y: -500,
      opacity: 0,
      ease: "none",
      duration: 1,
    });

    // 2. Hero image shrink
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

    // 3. Reveal image columns
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

    // 4. Center text fade-in
    tl.to(
      centerRef.current,
      { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 },
      "-=0.2"
    );

    // ── Parallax (independent of the pinned timeline) ────────────────────────
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
      {/* ── Hero image (full-bleed → shrinks to card) ── */}
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

      {/* ── Hero headline ── */}
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

      {/* ── Image columns + center text (presentational) ── */}
      <HeroColumns
        lEdgeRefs={lEdgeRefs}
        lInnerRefs={lInnerRefs}
        rInnerRefs={rInnerRefs}
        rEdgeRefs={rEdgeRefs}
        centerRef={centerRef}
      />
    </section>
  );
}