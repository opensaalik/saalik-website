"use client";
import Image from "next/image";
// import vercel from "/public/saalik500.png";
// import bg from "/public/sculpture.jpg";
// import Link from "next/link";
import Navbar from "./Navbar";
import Button from "./Button";
import Title from "./Title";
import Card from "./Card";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <div className="h-lvh">
        <div className="bg-[url('/img/sculpture.jpg')] bg-cover h-full w-full">
          <Navbar className="text-white" />
          <div className="text-white">
            <Button name="Get Started" href="/about" className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center m-5 p-5 my-10">
        <Image
          src="/img/patan.png"
          alt="Patan Krishna Mandir"
          width={500}
          height={500}
        />
        <div className="flex flex-col md:mr-8">
          <Title text="SAALIK: Your one stop destination for myths" />
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos unde
            tempora eaque aperiam, natus, quis sint architecto eius maxime magni
            voluptatem, consectetur repudiandae doloribus nemo nostrum eum dolor
            odio eveniet.
          </p>
          <div className="self-end mt-3">
            <Button name="read more" href="/about" />
          </div>
        </div>

      </div>
      <div className="bg-green-800 p-7">
        <Title text="STORIES" className="text-white" />
        <div className="flex flex-col md:flex-row">

        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center m-5 p-5 my-10">
        <Image
          src="/img/patan.png"
          alt="Patan Krishna Mandir"
          width={500}
          height={500}
        />
        <div className="flex flex-col md:mr-8">
          <Title text="MOTIVATION" />
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos unde
            tempora eaque aperiam, natus, quis sint architecto eius maxime magni
            voluptatem, consectetur repudiandae doloribus nemo nostrum eum dolor
            odio eveniet.
          </p>
          <div className="self-end mt-3">
            <Button name="read more" href="/about" />
          </div>
        </div>

      </div>
      <div>
        <Title text="Initiatives" />
        <div className="md:grid md:grid-cols-2">
          <Card imageSrc="/img/patan.png" title="Open Lipi" description="Lorem" link="openlipi" />
          <Card imageSrc="/img/patan.png" title="Open Abhilekh" description="Lorem" link="openlipi" />
        </div>
      </div>
      <div className="m-10">
        <Title text="Supported By" />
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="flex flex-col items-center">
            <Image src="/img/nepal_logo.png" alt="Department of Archeology" height={100} width={100} />
            <p className="m-2 text-green-800">Department of Archeology </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/img/nepal_logo.png" alt="National Archives of Nepal" height={100} width={100} />
            <p className="m-2 text-green-800">National Archives</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/img/kgmw6.png" alt="Kageshwori Manohara-6" height={100} width={100} />
            <p className="m-2 text-green-800">Kageshwori Manohara-6</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/img/tk3.png" alt="Tokha-3" height={100} width={100} />
            <p className="m-2 text-green-800">Tokha-3</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
