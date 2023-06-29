import React, { useState, useEffect } from 'react';
import langchainAppStore from '../../stores';
import { v4 as uuidv4 } from 'uuid';
import { IChat, MessageType } from '../../models/Types';

type BotProps = {
  content: string;
  first : boolean;
};

async function fetchData(query: string, namespace: string, setResultChunks: Function) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${process.env.REACT_APP_FETCH_URL}/api/pinecone/query/modification/index/namespace`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      index: 'msc-ds-ai',
      query: query,
      namespace: namespace
    })
  });

  if (!response.body) return '';

  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
  let result = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    result += value;
    setResultChunks((prevChunks: any) => [...prevChunks, value]);
  }
  return result;
}

const Bot: React.FC<BotProps> = ({ content , first }) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const lastQuery = langchainAppStore((state) => state.chatStore.lastQuery);
  const updateLastQuery = langchainAppStore((state) => state.chatStore.updateLastQuery);

  const updateLastChat = langchainAppStore((state) => state.chatStore.updateLastChat);
  const selectedlist = langchainAppStore((state) => state.informationStore.selectedlist);
  const chat = langchainAppStore((state) => state.chatStore.chat);

  const [resultChunks, setResultChunks] = useState<string[]>([]);
  let lastChat: IChat = chat[chat.length - 1];

  useEffect(() => {
    const fetchBotData = async () => {
      const message = await fetchData(lastQuery.message, selectedlist.namespace, setResultChunks);
      lastChat.message = message;
      updateLastChat(lastChat);
      updateLastQuery({ message: lastQuery.message, done: true });
    };
    if (!lastQuery.done && !first) {
      fetchBotData();
    } else {
      setShowContent(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
      resultDiv.scrollTop = resultDiv.scrollHeight;
    }
  }, [resultChunks]);

  return (
    <div className="message bot-message flex justify-start my-[10px]">
      <div id="result" className="message-content text-[15px]">
        {!showContent && <div dangerouslySetInnerHTML={{ __html: resultChunks.join('') }} />}
        {showContent && <div dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </div>
  );
};

export default Bot;
