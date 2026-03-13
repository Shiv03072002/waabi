'use client'
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const articles = [
  {
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&q=80",
    tags: ["Company news"],
    date: "January 28, 2026",
    title: "Waabi secures $1 Billion in new funding to lead Physical AI revolution",
  },
  {
    img: "https://images.unsplash.com/photo-1570288685369-f7305163d0e3?w=700&q=80",
    tags: ["Technology", "Company news"],
    date: "December 19, 2025",
    title: "From closed course to public roads: The path to driverless",
  },
  {
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=700&q=80",
    tags: ["Technology", "Company news"],
    date: "November 25, 2025",
    title: "Waabi unlocks direct-to-customer model with surface street driving capabilities",
  },
  {
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&q=80",
    tags: ["Technology"],
    date: "October 10, 2025",
    title: "How Waabi's simulation engine accelerates autonomous trucking at scale",
  },
];

export default function WaabiInsights() {
  const [offset, setOffset] = useState(0);
  const visible = articles.slice(offset, offset + 3);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');
        
        
      `}</style>

      {/* Warm greige background */}
      <section className="bg-[#edecea] pt-10 pb-16 overflow-hidden font-zagma">
        {/* Header row — left-padded */}
        <div className="pl-40 pr-10">
          <div className="flex items-end justify-between">
            {/* Left: title + description */}
            <div className="max-w-[420px]">
              <h2 className="font-serif text-[clamp(56px,6vw,80px)] leading-none tracking-tighter text-[#111] m-0">
                Insights.
              </h2>
              <p className="mt-8 text-sm text-[#888] leading-relaxed max-w-[360px] font-zagma">
                Explore technology deep dives, behind-the-scenes perspectives,
                and the ideas shaping the future of autonomy.
              </p>
            </div>

            {/* Right: View all + arrows */}
            <div className="flex items-center gap-2 pb-1">
              <button className="bg-[#e0185e] text-white border-none rounded-full px-[22px] py-3 text-[13px] font-medium cursor-pointer font-zagma transition-colors duration-200 hover:bg-[#c0104a]">
                View all
              </button>
              <button
                className="w-10 h-10 rounded-full border border-[#c8c5c0] bg-transparent flex items-center justify-center cursor-pointer text-[15px] text-[#333] transition-all duration-200 hover:bg-white hover:border-[#999] disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={() => setOffset(o => Math.max(0, o - 1))}
                disabled={offset === 0}
              >
                ←
              </button>
              <button
                className="w-10 h-10 rounded-full border border-[#c8c5c0] bg-transparent flex items-center justify-center cursor-pointer text-[15px] text-[#333] transition-all duration-200 hover:bg-white hover:border-[#999] disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={() => setOffset(o => Math.min(articles.length - 3, o + 1))}
                disabled={offset >= articles.length - 3}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Cards row with Swiper */}
        <div className="pl-40 pr-0 mt-9">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={3}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="!overflow-visible"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="cursor-pointer flex flex-col group">
                  {/* Image */}
                  <div className="overflow-hidden rounded-xl h-[285px]">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-4">
                    {article.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center border border-[#c8c5c0] rounded-full px-2.5 py-0.5 text-[11.5px] text-[#555] bg-transparent font-zagma">
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs text-[#999] ml-0.5 font-zagma">{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-[17px] font-semibold text-[#111] leading-tight tracking-tight font-zagma">
                    {article.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons (hidden since we're using the ones in header) */}
          <div ref={navigationPrevRef} className="hidden" />
          <div ref={navigationNextRef} className="hidden" />
        </div>
      </section>
    </>
  );
}