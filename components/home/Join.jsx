'use client'

import { useEffect, useState } from "react";

const imgs = [
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
    alt: "Woman working at desk",
    classes: "left-[40px] top-[140px] w-[200px] h-[280px] z-1 rounded-[14px]",
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80",
    alt: "Worker on truck",
    classes: "left-[210px] top-[88px] w-[320px] h-[380px] z-2 rounded-[14px]",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    alt: "Truck detail closeup",
    classes: "left-[480px] top-[44px] w-[640px] h-[460px] z-3 rounded-[14px]",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1000&q=80",
    alt: "Waabi truck fleet at sunset",
    classes: "left-[820px] top-0 right-0 w-[740px] h-[540px] z-4 rounded-[14px]",
  },
];

export default function WaabiImageFan() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

  return (
    <section className="font-sans bg-white min-h-[600px] relative pt-4 pb-20 px-0 overflow-hidden">
      {/* Join the team button — top left */}
      <button className="absolute top-4 left-10 bg-[#e0185e] text-white border-none rounded-[100px] px-7 py-3.5 text-sm font-medium cursor-pointer z-10 transition-colors duration-200 hover:bg-[#c0104a] font-['DM_Sans']">
        Join the team
      </button>

      {/* Image fan container - full width no padding */}
      <div className="relative h-[560px] mt-[60px] w-full">
        {imgs.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`absolute object-cover shadow-[0_8px_32px_rgba(0,0,0,0.13)] transition-all duration-700 ease-out
              ${img.classes}
              ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: show ? `${i * 0.1}s` : "0s" }}
          />
        ))}
      </div>

      {/* Pink footer bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#e0185e] to-[#c0104a]" />
    </section>
  );
}