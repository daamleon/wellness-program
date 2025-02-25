import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/reusable/Hero";
import MainContent1 from "@/components/content/MainContent1";
import MainContent2 from "@/components/content/MainContent2";
import MainContent3 from "@/components/content/MainContent3";
import MainContent4 from "@/components/content/MainContent4";
import EventLocation from "@/components/event/EventLocation";
import Footer from "@/components/common/Footer";
import NavMobile from "@/components/common/NavMobile";
import Promo from "@/components/event/Promotion";
import VidPlayer from "@/components/common/VideoPlayer";
import bannerImg from "@/assets/banner.jpeg";


function ProgramPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header setIsOpen={setIsOpen} />
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
      <div className="pt-12 flex-1 overflow-x-hidden">
        <Hero
          title="SLEEP TOURISM & WELLNESS"
          subtitle="Recharge Your Body, Revive Your Mind."
          backgroundImage={bannerImg}
          buttonText="Daftar Sekarang"
          buttonLink="/register"
        />
        <MainContent1 />
        <VidPlayer videoId="72ZVFzu0WnE" />
        <MainContent2 />
        <MainContent3 />
        <MainContent4 />
        <EventLocation />
        <Promo />
        <Footer />
      </div>
    </div>
  );
}

export default ProgramPage;
