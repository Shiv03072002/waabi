import Image from "next/image";
import HeroSection from '@/components/home/HeroSection'
import Join from '@/components/home/Join'
import Insights from '@/components/home/Insights'
import  Partners from '@/components/home/Partners'
import ImageLayout from '@/components/home/ImageLayout'
export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <ImageLayout/>
      <Partners/>
      <Insights/>
      <Join/>
 
    </div>
  );
}
