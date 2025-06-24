"use client"

import Navbar from "../Navbar";
import Story from "../Story";
import Title from "../Title";
import Footer from "../footer";
import Head from "next/head";
// import Image from "next/image";

export default function Myths() {
  return (
    <>
      <Head>
        <title>Myths | SAALIK</title>
      </Head>
      <Navbar className="text-white" />
      <div className="mx-10 mt-10 mb-20">
        <Title text="Myths" className="mt-10 mb-10" />
        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-x-5 gap-y-3">
          <Story imageSrc="/img/stories/10.jpg" title="Kaal Bhairav" link="/stories/kaal-bhairav" />
          <Story imageSrc="/img/stories/swayambhu.jpg" title="Swayambhu" link="/stories/swayambhu" />
          <Story imageSrc="/img/stories/birupakshya.jpg" title="Birupakshya" link="/stories/birupakshya" />
        </div>
        <div className="my-10 grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-x-5 gap-y-3">
          <Story imageSrc="/img/stories/10.jpg" title="Kaal Bhairav" link="/stories/kaal-bhairav" />
          <Story imageSrc="/img/stories/swayambhu.jpg" title="Swayambhu" link="/stories/swayambhu" />
          <Story imageSrc="/img/stories/birupakshya.jpg" title="Birupakshya" link="/stories/birupakshya" />
        </div>
      </div>
      <Footer />
    </>
  );
}
