import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    name: string;
    href: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ name, href, className }) => {
    return (
        <Link href={href} className={`dark:text-white border text-black text-center font-bold border-green-500 hover:bg-green-500 hover:text-white rounded-full px-4 py-2 md:w-fit m-5 ${className}`}>
            {name}
        </Link>
    );
};

export default Button;
