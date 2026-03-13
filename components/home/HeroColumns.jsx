"use client";

import { forwardRef } from "react";

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

/**
 * HeroColumns
 *
 * Props:
 *  - lEdgeRefs   { current: [] }  – ref array for left-edge images
 *  - lInnerRefs  { current: [] }  – ref array for left-inner images
 *  - rInnerRefs  { current: [] }  – ref array for right-inner images
 *  - rEdgeRefs   { current: [] }  – ref array for right-edge images
 *  - centerRef   React ref        – ref for the center text block
 */
export default function HeroColumns({
  lEdgeRefs,
  lInnerRefs,
  rInnerRefs,
  rEdgeRefs,
  centerRef,
}) {
  return (
    <>
      {/* LEFT EDGE */}
      <div className="absolute left-0 top-0 h-full w-[13%] overflow-hidden">
        {edgeCol.map((img, i) => (
          <div
            key={i}
            ref={(el) => (lEdgeRefs.current[i] = el)}
            className="absolute overflow-hidden shadow-sm"
            style={{ top: img.top, left: "6px", width: 130, height: 118, borderRadius: 14 }}
          >
            <img src={img.src} className="w-full h-full object-cover will-change-transform" alt="" />
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
            <img src={img.src} className="w-full h-full object-cover will-change-transform" alt="" />
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
            <img src={img.src} className="w-full h-full object-cover will-change-transform" alt="" />
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
            <img src={img.src} className="w-full h-full object-cover will-change-transform" alt="" />
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
    </>
  );
}