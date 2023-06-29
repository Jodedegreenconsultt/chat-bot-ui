import React from 'react';

type SlickComponentProps = {
  header: string;
  paragraph: string;
};

const SlickComponent = ({ header, paragraph }: SlickComponentProps) => {
  return (
    <>
      <div className="">
        <h1 className="text-white xl:text-[106px] text-[11vw]">{header}</h1>
      </div>
      <div className="">
        <p className="text-white md:text-3xl text:base">{paragraph}</p>
      </div>
    </>
  );
};

export default SlickComponent;