import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

//Assets
import sendIcon from '../../public/assets/img/icon/send.svg';

//Store
import langchainAppStore from '../../stores';
import { IChat, MessageType } from '../../models/Types';

const InputBox: React.FC = () => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const parentDivRef = useRef<HTMLDivElement>(null);
  const updateChat = langchainAppStore((state) => state.chatStore.updateChat);
  const updateLastQuery = langchainAppStore((state) => state.chatStore.updateLastQuery);
  const selectedlist = langchainAppStore((state) => state.informationStore.selectedlist);

  const handleSendClick = () => {
    updateLastQuery({ message: message, done: false });
    updateChat({ message: message, id: uuidv4(), type: MessageType.User });
    updateChat({ message: '', id: uuidv4(), type: MessageType.Bot });
    setMessage('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendClick();
    }
  };

  useEffect(() => {
    if (textareaRef.current && parentDivRef.current) {
      const textareaHeight = textareaRef.current.scrollHeight;
      parentDivRef.current.style.height = `${textareaHeight}px`;
    }
  }, [message]);

  return (
    <div className="flex">
      <div ref={parentDivRef} className="flex-1 h-[45px]">
        <textarea
          ref={textareaRef}
          className="w-full h-full p-2 resize-none border border-gray-300 focus:outline-none focus:border-blue-500 overflow-hidden"
          placeholder={
            selectedlist.type === '0'
              ? 'Ask any question....'
              : 'Ask any question....'
          }
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Add the event handler for Enter key press
        ></textarea>
      </div>
      <button className="px-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none" onClick={handleSendClick}>
        <Image src={sendIcon} alt="send icon" />
      </button>
    </div>
  );
};

export default InputBox;
