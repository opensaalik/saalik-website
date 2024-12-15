import React from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <h1 className={`text-2xl md:text-4xl font-bold text-center my-8 text-green-800 ${className}`}>{text}</h1>
  );
};

export default Title;
