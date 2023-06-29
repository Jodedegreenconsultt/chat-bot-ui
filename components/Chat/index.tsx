import React, { useEffect, useRef } from 'react';
import InputBox from './Input';
import Body from './Body';

const Chat = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      console.log(chatContainerRef.current.scrollHeight);
    }
  };
  // Initialize the MutationObserver
  useEffect(() => {
    const chatContainer = chatContainerRef.current;

    // Create a new instance of MutationObserver
    const observer = new MutationObserver(scrollToBottom);

    // Configuration for the observer
    const config = { childList: true, subtree: true };

    // Start observing changes in the chat container
    if (chatContainer) {
      observer.observe(chatContainer, config);
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="chat-container max-w-[1200px] h-full flex justify-center mt-[40px] overflow-y-hidden mx-auto bg-[#3b3b67] h-[calc(_100vh_-_175px)]">
      <div className="body-container w-[100%] overflow-y-auto h-[calc(_100vh_-_215px)] p-[15px]" ref={chatContainerRef}>
        <Body />
      </div>
      <div className="input-container fixed bottom-[5px] max-w-[700px] m-auto w-[100%]">
        <InputBox />
      </div>
    </div>
  );
};

export default Chat;
