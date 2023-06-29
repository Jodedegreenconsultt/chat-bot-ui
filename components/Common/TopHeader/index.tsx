// Dependencies
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import TopHeaderButton from '../TopHeaderButton';
import openIcon from '../../../public/assets/img/icon/open icon.svg';
import closeIcon from '../../../public/assets/img/icon/close Icon.svg';
import whIcon from '../../../public/assets/img/icon/WH Icon.svg';
import Image from 'next/image';

const Index = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [tokenFound, setTokenFound] = useState<boolean>(false);

  let tokenExist = false;
  if (typeof window !== 'undefined') {
    tokenExist = !!localStorage.getItem('token');
  }

  useEffect(() => {
    setTokenFound(tokenExist);
  }, [tokenExist]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="langchain-app-header justify-center flex flex-col relative bg-white">
      <div className="flex items-center w-full px-6 2xl:px-[8rem] justify-between gap-4  box-border">
        <Link href={'/'}>
          <div className="cursor-pointer xl:py-[19px] pb-1 pt-2">
            <Image src={whIcon} alt="MSc Data Science - University of Wolverhampton" />
          </div>
        </Link>
        <div className="xl:hidden bg-[#596781] w-20 rounded h-[70px] justify-center items-center flex">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
            aria-label="Open menu"
          >
            {showMenu ? (
              <Image src={closeIcon} alt="Close burger icon" />
            ) : (
              <Image src={openIcon} alt="Open burger icon" />
            )}
          </button>
        </div>
        <div
          className={`xl:flex items-center justify-center hidden gap-[15px] xl:flex-row ${
            showMenu ? 'block' : 'hidden'
          }`}
        >
          <TopHeaderButton href="/" text="Home" />
          <TopHeaderButton href="https://join.wlv.ac.uk/form/register?492=CS032P31UVD" text="Register your interest" />
          <TopHeaderButton href="https://my.wlv.ac.uk/dashboard/home" text="MY-WLV" />
        </div>
        <div className={`xl:hidden shadow-2xl absolute top-[85px] right-0 p-[0px] ${showMenu ? 'block' : 'hidden'}`}>
          <div className="drop-shadow-2xl bg-white xl:text-white text-black shadow-2xl md:bg-clip-padding rounded w-[180px] flex items-start gap-[5px] flex-col">
            <TopHeaderButton
              href="/"
              text="Home"
              mblBG={true}
            />
            <TopHeaderButton
              href="https://join.wlv.ac.uk/form/register?492=CS032P31UVD"
              text="Register Interest"
              mblBG={true}
              />
            <TopHeaderButton
              href="https://my.wlv.ac.uk/dashboard/home"
              text="MY-WLV"
              mblBG={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
