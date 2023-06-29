import React from 'react';
import { CircleLoader } from 'react-spinners';

const CircleLoaderIcon = () => {
  return (
    <div className="w-[100%] flex items-center justify-center opacity-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <CircleLoader color={`#F7D060`} loading={true} size={50} />
    </div>
  );
};

export default CircleLoaderIcon;