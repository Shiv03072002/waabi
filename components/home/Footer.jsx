'use client'
import { useRef, useEffect, useState } from "react";

export default function WaabiFooter() {
  const footerRef = useRef(null);
  const [pos, setPos] = useState({ x: 65, y: 50 });
  const [smoothPos, setSmoothPos] = useState({ x: 65, y: 50 });
  const animRef = useRef(null);
  const currentPos = useRef({ x: 65, y: 50 });

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const onMove = (e) => {
      const rect = footer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPos({ x, y });
    };

    footer.addEventListener("mousemove", onMove);
    return () => footer.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      setPos(target => {
        const cx = lerp(currentPos.current.x, target.x, 0.06);
        const cy = lerp(currentPos.current.y, target.y, 0.06);
        currentPos.current = { x: cx, y: cy };
        setSmoothPos({ x: cx, y: cy });
        return target;
      });
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const navLinks = ["Home", "Safety", "Research", "Company", "Careers", "Insights"];
  const socialLinks = [
    { label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
    { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M9.75 15.02L15.5 12 9.75 8.98v6.04z" },
    { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative bg-[#2a0a14] overflow-hidden min-h-[460px] px-6 md:px-16 lg:px-24 py-14 pb-10 font-sans cursor-default"
    >
      {/* Primary glow blob */}
      <div
        className="absolute pointer-events-none z-0 will-change-transform"
        style={{
          width: 680,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, #e8185e 0%, #c0104a 25%, transparent 70%)',
          opacity: 0.55,
          filter: 'blur(40px)',
          transform: 'translate(-50%, -50%)',
          left: `${smoothPos.x}%`,
          top: `${smoothPos.y}%`,
        }}
      />

      {/* Secondary smaller glow */}
      <div
        className="absolute pointer-events-none z-0 will-change-transform"
        style={{
          width: 360,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, #ff3377 0%, transparent 70%)',
          opacity: 0.32,
          filter: 'blur(55px)',
          transform: 'translate(-50%, -50%)',
          left: `${smoothPos.x + 5}%`,
          top: `${smoothPos.y - 6}%`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[1fr_auto_auto] gap-10 lg:gap-20 xl:gap-32">
        {/* Left section */}
        <div className="max-w-md">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            We're just<br />getting started
          </h2>
          <p className="text-white/55 text-sm mt-6 leading-relaxed">
            Follow along or reach out directly at
          </p>
          <div className="mt-1 text-sm space-x-2">
            <a 
              href="mailto:press@waabi.ai" 
              className="text-white/70 underline underline-offset-3 hover:text-white transition-colors"
            >
              press@waabi.ai
            </a>
            <span className="text-white/40">|</span>
            <a 
              href="mailto:info@waabi.ai" 
              className="text-white/70 underline underline-offset-3 hover:text-white transition-colors"
            >
              info@waabi.ai
            </a>
          </div>
        </div>

        {/* Center navigation */}
        <div>
          <p className="text-white/38 text-xs font-medium mb-5 tracking-wider">
            ABOUT US
          </p>
          <nav className="space-y-3.5">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="block text-white/88 text-base hover:text-white transition-colors no-underline"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Social icons */}
        <div className="flex gap-2.5">
          {socialLinks.map((social) => (
            <button
              key={social.label}
              className="w-10 h-10 rounded-xl bg-white/12 hover:bg-white/22 transition-colors flex items-center justify-center text-white flex-shrink-0"
              aria-label={social.label}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.path} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 mt-16 lg:mt-20">
        <p className="text-white/35 text-xs">© 2026 Waabi. All Rights Reserved.</p>
        <a 
          href="#" 
          className="inline-block text-white/55 text-xs underline underline-offset-3 hover:text-white transition-colors mt-1"
        >
          Privacy Policy
        </a>
      </div>

      {/* Giant wordmark */}
      <div className="absolute bottom-0 right-0 z-1 pointer-events-none select-none">
        <span className="font-sans font-black text-[clamp(96px,14vw,200px)] text-white/95 leading-none tracking-tight block -mb-4 -mr-2">
          w<span className="text-[#e0185e]">aa</span>bi
        </span>
      </div>
    </footer>
  );
}