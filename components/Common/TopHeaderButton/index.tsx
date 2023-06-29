import Link from 'next/link';
import React from 'react';

const TopHeaderButton = ({ href, text, mblBG= false }: any) => {
  return (
    <Link href={href} target="_blank">
      <button
        className={`text-[12px] xl:text-base xl:text-white text-black font-bold xl:justify-center xl:items-center flex md:gap-1 uppercase md:px-[20px] px-[14px] py-[11px] cursor-pointer text-center rounded xl:bg-[#596781] ${
          mblBG ? 'text-left w-full' : 'min-w-[150px]'
        }`}
      >
        {text}
      </button>
    </Link>
  );
};

export default TopHeaderButton;
