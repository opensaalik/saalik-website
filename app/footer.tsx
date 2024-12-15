import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black p-4 px-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-around py-5">
        <Image src="/img/saalik-logo.png" alt="SAALIK logo" width={100} height={100} />
        <div className="flex flex-col items-center mb-2">
          <h1 className="text-2xl font-bold text-center my-2">Quick Links</h1>
          <Link href="#" className='hover:text-green-800 p-2'> Home</Link>
          <Link href="#" className='hover:text-green-800 p-2'>About</Link>
          <Link href="#" className='hover:text-green-800 p-2'>Services</Link>
          <Link href="#" className='hover:text-green-800 p-2'>Contact</Link>
        </div>
        <div className='flex flex-col items-center mb-2'>
          <h1 className="text-2xl font-bold text-center my-2 ">Company</h1>
          <Link href='/about' className='hover:text-green-800 p-2'>About</Link>
          <Link href='/team' className='hover:text-green-800 p-2'>Team</Link>
          <Link href='/motivation' className='hover:text-green-800 p-2'>Motivation</Link>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className="text-2xl font-bold text-center my-2 ">Socials</h1>
          <div className='flex justfy-around'>
            <div className='flex flex-col justify-around'>
              <a href="https://www.facebook.com/saalik" target="_blank" rel="noopener noreferrer" className='flex hover:text-green-800 p-2'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.042 4.388 23.094 10.125 24v-8.437h-3.047v-3.49h3.047v-2.66c0-3.025 1.793-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.494 0-1.953.928-1.953 1.873v2.296h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.042 24 12.073z" /></svg>
                <p className='text-green-500'>/saalik</p>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='flex hover:text-green-800 p-2'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.499 6.203a3.008 3.008 0 00-2.116-2.118C19.555 3.579 12 3.579 12 3.579s-7.555 0-9.383.506A3.008 3.008 0 00.501 6.203 32.394 32.394 0 000 11.999a32.394 32.394 0 00.501 5.796 3.008 3.008 0 002.116 2.118c1.828.506 9.383.506 9.383.506s7.555 0 9.383-.506a3.008 3.008 0 002.116-2.118 32.394 32.394 0 00.501-5.796 32.394 32.394 0 00-.501-5.796zM9.545 15.454V8.545l6.364 3.455-6.364 3.454z" /></svg>
                <p className='text-green-500'>/saalik</p>
              </a>
              <a href="https://www.instagram.com/saalik0" target="_blank" rel="noopener noreferrer" className='flex hover:text-green-800 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                </svg>
                <p className='text-green-500'>/saalik</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center m-3 mt-5 text-gray-500 font-medium'>
        <p className='text-xs'>© SAALIK TECH PVT. LTD. {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
