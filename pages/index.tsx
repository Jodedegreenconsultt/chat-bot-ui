import type { NextPage } from 'next';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickSetting } from '../components/Common/SlickSlider/SlickSetting';
import SlickComponent from '../components/Common/SlickSlider/SlickComponent';

import langchainAppStore from '../stores';

const Home: NextPage = () => {

  const setSelectedList = langchainAppStore((state) => state.informationStore.setSelectedList);

  return (
    <>
      <main>
        <div className=" h-[100%] m-auto relative">
          <div className="relative z-10 px-6 2xl:px-[8rem] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <Slider
              {...SlickSetting}
              afterChange={(currentTarget) => {
                if(currentTarget === 0){
                  setSelectedList({
                    namespace: 'data_science',
                    title: 'MSC Data science',
                    type: "0"
                  })
                }else{
                  setSelectedList({
                    namespace: 'ai',
                    title: 'MSC Artificial Intelligence',
                    type: "1"
                  })
                }
                console.log(currentTarget);
              }}
            >
              <div className="">
                <SlickComponent
                  header="MSc Data Science"
                  paragraph="Hey, welcome to the chatbot app for the MSc Data Science course. The MSc Data Science is a conversion MSc,
                    designed for students from various disciplines. 
                    My name is JayBot. I can help you with general enquiries about the course."
                />
              </div>
              <div className="">
                <SlickComponent
                  header="MSc Artificial Intelligence"
                  paragraph="Hey, welcome to the chatbot app for the MSc Artificial Intelligence (AI) course. The MSc Artificial Intelligence 
                    is a conversion MSc, for students from various disciplines.
                    My name is JayBot. I can help you with general enquiries about the course."
                />
              </div>
            </Slider>
            <div className="flex justify-start items-start mt-10 gap-6 xl:gap-10 md:flex-row flex-col">
              <div className="max-w-[225px] w-full">
                <Link href="/qa">
                  <button
                    className={`text-lg text-white font-bold justify-center items-center flex gap-1 px-[10px] py-[20px] cursor-pointer text-center rounded h-full bg-[#57C0A2;] w-full`}
                  >
                    Chat With JayBot
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="qa-bg z-0 absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
