import Image from 'next/image';
import React from 'react';

export type LoginIconButtonProps = {
  text: string;
  img?: string | undefined;
};

const index = ({ img = '', text }: LoginIconButtonProps) => {
  return (
    <div className="flex justify-center items-center gap-2 bg-white rounded-md p-2 w-[170px]">
      <Image src={img} alt="text" width={16} height={16} />
      <p className="text-black">{text}</p>
    </div>
  );
};

export default index;
