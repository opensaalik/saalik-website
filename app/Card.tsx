import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Title from './Title';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, link }) => {
    return (
        <div className="flex flex-col items-center border-2 border-green-800 p-5 rounded-md m-5">
            <Image src={imageSrc} alt="Card Image" height={100} width={100} className='rounded-full' />
            <Title text={title} />
            <p className='mb-5'>{description}</p>
            <Button name="read more" href={link} className='mt-4' />
        </div>
    );
};

export default Card;