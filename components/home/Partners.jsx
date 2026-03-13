'use client'
import { useState } from "react";

const partners = [
  {
    name: "Volvo",
    quote:
      "Partnerships like the one between Volvo Autonomous Solutions and Waabi play an important role not only in advancing autonomous technology, but also in building the broader ecosystem required to support commercial deployment.",
    author: "Nils Jaeger",
    role: "CEO of Volvo Autonomous Solutions",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=85",
    logoLabel: "Volvo",
  },
  {
    name: "Uber",
    quote:
      "Waabi's approach to scalable autonomy is exactly what the industry needs. Their technology stack is genuinely world-class and their team executes at an incredible pace.",
    author: "Dara Khosrowshahi",
    role: "CEO of Uber",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1400&q=85",
    logoLabel: "Uber",
  },
  {
    name: "Uber Freight",
    quote:
      "Our partnership with Waabi represents the power of combining cutting-edge technology with a vast logistics network to drive meaningful industry impact. By advancing operational excellence and scaling real-world applications, this collaboration underscores our joint commitment to transforming autonomous freight.",
    author: "Olivia Hu",
    role: "Head of Autonomous Trucking & Electrification at Uber Freight",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1400&q=85",
    logoLabel: "Uber Freight",
  },
  {
    name: "NVIDIA",
    quote:
      "Waabi is one of the most technically sophisticated teams building on our platform. Their use of simulation-driven AI represents the future of autonomous systems.",
    author: "Jensen Huang",
    role: "CEO of NVIDIA",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85",
    logoLabel: "NVIDIA",
  },
];

function PartnerLogo({ label }) {
  return (
    <div className="w-[60px] h-[60px] rounded-full border-2 border-[#e0185e] flex items-center justify-center flex-shrink-0">
      <span className={`text-white text-center leading-tight max-w-[44px] font-sans font-semibold ${
        label.length > 6 ? 'text-[8px]' : 'text-[10px]'
      }`}>
        {label}
      </span>
    </div>
  );
}

export default function WaabiPartners() {
  const [active, setActive] = useState(0);
  const p = partners[active];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      <section className="font-sans bg-white py-5">
        {/* Header section */}
        <div className="max-w-5xl mx-auto mb-8 px-4">
          <div className="flex justify-between items-start">
            <h2 className="font-serif text-4xl max-w-70">
              Trusted by the best in the industry.
            </h2>
            <p className="text-gray-600 max-w-md text-sm leading-relaxed mt-10">
              From hardware providers and OEMs to retailers, logistics providers and carriers, the best in the business count on Waabi to deliver real results.
            </p>
          </div>
        </div>

        <div className="relative h-[700px] max-w-5xl mx-auto">
          {/* Background images */}
          {partners.map((pt, i) => (
            <img
              key={i}
              src={pt.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-left transition-opacity duration-550 rounded-[16px]"
              style={{ opacity: i === active ? 1 : 0 }}
            />
          ))}

          {/* Gradient fade into dark card */}
          <div className="absolute inset-0 rounded-[16px] bg-gradient-to-r from-transparent via-[rgba(8,8,8,0.3)] to-[rgba(8,8,8,0.6)] pointer-events-none" 
               style={{ backgroundSize: '100% 100%', backgroundPosition: '45% 62% 72%' }} />

          {/* Dark card — flush to the right edge, rounded only on left corners */}
          <div className="absolute top-6 bottom-6 -right-20 w-[390px] bg-[#191919] rounded-[16px] flex flex-col p-8 pl-8 pr-8">
            {/* Tabs */}
            <div className="flex gap-5 border-b border-white/10 pb-0 mb-6 overflow-x-auto">
              {partners.map((pt, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative pb-2 text-[13px] font-medium whitespace-nowrap font-sans transition-colors duration-200
                    ${i === active ? 'text-white font-semibold' : 'text-white/38 hover:text-white/70'}`}
                >
                  {pt.name}
                  {i === active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e0185e]" />
                  )}
                </button>
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-white text-[19px] leading-relaxed tracking-tight flex-1">
              {p.quote}
            </p>

            {/* Author */}
            <div className="mt-6">
              <p className="text-white text-sm font-semibold">{p.author}</p>
              <p className="text-white/45 text-[13px] mt-1 leading-tight">
                {p.role}
              </p>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between mt-8">
              <PartnerLogo label={p.logoLabel} />
              <button className="rounded-full bg-[#e0185e] text-white text-[13px] font-medium px-6 py-3 font-sans transition-all duration-200 hover:bg-[#c0104a] hover:-translate-y-0.5">
                See the details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}