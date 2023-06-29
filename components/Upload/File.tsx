import React from 'react';
import Image from 'next/image';
import documentIcon from '../../public/assets/img/icon/document.svg';

interface IFile {
  name: string;
  size: number;
}

function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 'n/a';
  const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))), 10);
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

function preocessName(name: string): string {
  if (name.length > 35) {
    return `${name.substring(0, 5)}...${name.substring(name.length - 35 + 8, name.length)}`;
  }
  return name;
}

const File: React.FC<IFile> = ({ name, size }) => {
  return (
    <div className="file-details flex items-center h-[55px] bg-[#171737] rounded-[2px] p-[5px] my-[10px]">
      <div className="icon mt-[3px] ml-[3px]">
        <Image src={documentIcon} alt="document" />
      </div>
      <div className="file-content flex items-center justify-between px-[5px] w-[100%]">
        <span className="name text-[16px]">{preocessName(name)}</span>
        <span className="size text-[20px]">{bytesToSize(size)}</span>
      </div>
    </div>
  );
};

export default File;
