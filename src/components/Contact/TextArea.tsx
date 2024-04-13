import React from 'react';

interface TextAreaProps {
  rows?: number;
  id: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ rows = 3, id, name }) => {
  return (
    <textarea
      className='border-2 w-[370px] rounded-lg p-3 focus:border-cyan-500 focus:outline-none focus:ring focus:ring-purple-50 font-inter text-md font-normal leading-6 '
      rows={rows}
      id={id}
      name={name}
    ></textarea>
  );
};

export default TextArea;
