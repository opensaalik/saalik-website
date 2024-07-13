import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface StoryProp {
    imageSrc: string;
    link: string;
    title: string;
}

const Story: React.FC<StoryProp> = ({ imageSrc, link, title }) => {
    return (
        <Link href={link}>
            <Image title='Click to view more' src={imageSrc} alt={title} height={1080} width={1080} className='rounded-md hover:opacity-20' />
        </Link>
    );
};

export default Story;