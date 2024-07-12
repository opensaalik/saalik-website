import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black p-4 px-10 text-white">
            <div className="container mx-auto flex flex-col items-center md:items-start">
                <div className="items-start flex flex-col">
                    <Link href="#" className='hover:text-green-800 p-2'> Home</Link>
                    <Link href="#" className='hover:text-green-800 p-2'>About</Link>
                    <Link href="#" className='hover:text-green-800 p-2'>Services</Link>
                    <Link href="#" className='hover:text-green-800 p-2'>Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;