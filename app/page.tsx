"use client";
import Image from "next/image";
// import vercel from "/public/saalik500.png";
// import bg from "/public/sculpture.jpg";
// import Link from "next/link";
import Navbar from "./Navbar";
import Button from "./Button";
import Title from "./Title";
import Footer from "./footer";
import Story from "./Story";

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
        <div className="flex flex-col md:mr-8 p-4">
          <Title text="SAALIK: An Initiave" />
          <p className="text-justify">
            SAALIK is an voluntary initiative by SAALIK TECH PVT. LTD. aiming to preserve Nepal's culture heritage for posterity through technology.
            We're a passionate team of researchers and developers, deeping in love with Nepal and the expression of her people. Our work span from digitization of
            sculptures, manuscripts, and writing scripts to promotion of the hidden gems of Nepal thorough a work-in-progress travel app.
          </p>
          <br />
          <p>
            We are united with the fundamental belief that the preservation of our culture is the key to our identity and the key to our future.
            Our entire heritage is at great risk of being lost forever. Our mythologies are rarely studied critically, and our sculptures are often neglected.
            Scholars studying our writing scripts are few and far between; and our manuscripts are often left to rot in the archives.
            Collaborating with governmental and non-governmental agencies, We are working to ensure that our culture is preserved for future generations.
          </p>
          <div className="self-end mt-3">
            <Button name="read more" href="/about" />
          </div>
        </div>

      </div>
      <div className="bg-black p-7 flex flex-col">
        <Title text="LATEST STORIES" className="text-white" />
        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-x-5 gap-y-3">
          <Story imageSrc="/img/stories/10.jpg" title="Kaal Bhairav" link="/stories/kaal-bhairav" />
          <Story imageSrc="/img/stories/swayambhu.jpg" title="Swayambhu" link="/stories/swayambhu" />
          <Story imageSrc="/img/stories/birupakshya.jpg" title="Birupakshya" link="/stories/birupakshya" />
        </div>
        <Button name="view all" href="/stories" className="self-center text-white mt-5" />
      </div>
      <div className="flex flex-col md:flex-row justify-center m-5 p-5 my-10">
        <Image
          src="/img/patan.png"
          alt="Patan Krishna Mandir"
          width={500}
          height={500}
        />
        <div className="flex flex-col md:mr-8">
          <Title text="MOTIVATION & GOALS" />
          <p className="text-justify p-3">
            Physical mediums are notoriously precarious: manuscripts may not burn, but they certainly do rot.
            Sculptures may not rot, but they certainly do break. Furthermore, their identification and interpretation are often hard to infer by just looking at them.
            Scripts do not rot, but they are often indecipherable to the untrained eye. Nepal's indiginous scripts are also untypable on modern devices: there exist no fonts, let alone unicode specifications.
            Myths are nost just stories: they are the very fabric of our culture. They are the stories that bind us together, that make us who we are.
            If let as it is, our culture is at great risk of being lost forever.
            <br />
            <br />
            We aim to transcribe our manuscripts, to digitize our sculptures, to create fonts for our scripts, and to promote our myths.
            We aim to make our culture accessible to everyone, to make it a part of our daily lives, and to make it a part of our future.
            Through this initiave, we aim above all to put it out there that we exists: that our culture is alive and well, and that it is worth preserving.
          </p>
          <div className="self-end mt-3">
            <Button name="read more" href="/about" />
          </div>
        </div>

      </div>
      <div className="bg-black p-7">
        <Title text="AI: SAALIK's Research for Sculpture Detection" className="text-white" />
        <div className="flex flex-:ol md:flex-row text-white justify-center">
          <p className="text-center">
            <b>Sculptures are <u>hard.</u></b> <br /> With the amount of things you need to keep track of to identify a sculpture, <br />it's no wonder that we're notoriously bad at identifying and interpreting our own sculptures.
          </p>
        </div>
      </div>
      <div>
        <Title text="Initiatives" />
        <div className="md:grid md:grid-cols-2">

          <div className="flex flex-col items-center border-2 border-green-800 p-5 rounded-md m-5 bg-black text-white">
            <Image src='/img/patan.png' alt="Card Image" height={100} width={100} className='rounded-full' />
            <Title text="openlipi" />
            <p className="mb-5 font-['openlipi-lichchhavi'] text-4xl">This is america</p>
            <div>

              <button name="decrypt" className='mt-4 text-white' />
              <Button name="read more" href='/openlipi' className='mt-4 text-white' />
            </div>
          </div>

          <div className="flex flex-col items-center border-2 border-green-800 p-5 rounded-md m-5 bg-black text-white">
            <Image src='/img/patan.png' alt="Card Image" height={100} width={100} className='rounded-full' />
            <Title text="openabhhilekh" />
            <p className="mb-5">This is america</p>
            <Button name="read more" href='/openabhilekh' className='mt-4 text-white' />
          </div>
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
