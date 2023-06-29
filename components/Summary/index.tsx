import React from 'react';

import langchainAppStore from '../../stores';

const index = () => {
  const results = langchainAppStore((state) => state.summarizeStore.results);
  const fileList = langchainAppStore((state) => state.fileStore.fileList);

  return (
    <div className="summary-result-container px-4">
      <h1 className="py-[10px]">SUMMARY</h1>
      <div className="summary-content p-[20px]">
        {results.map((item, index) => {
          return (
            <div key={index} className="single-result-container w-[100%] text-left py-[15px]">
              <div className="name-of-doc">
                <span className="text-[25px]">
                  {index + 1}. {fileList[index].name}
                </span>
              </div>
              <div className="summary">
                {item.success ? (
                  <span className="text-[20px]">{item.data}</span>
                ) : (
                  <span className="text-[#ea5555] text-[20px]">
                    Something error with this data, You can reduce the size!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
