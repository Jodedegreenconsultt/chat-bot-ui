//Store
import { ILangchainAppStore } from './index';
import { IChat, ILastQuery, MessageType } from '../models/Types';
import { v4 as uuidv4 } from 'uuid';

export interface IChatStore {
  chat: IChat[];
  updateChat: (singleChat: IChat) => void;
  updateLastChat: (updatedChat: IChat) => void;

  lastQuery: ILastQuery;
  updateLastQuery: (lastQuery: ILastQuery) => void;
}

export const chatStore = (set: any, get: any): IChatStore => ({
  chat: [
    {
      id: uuidv4(),
      message: 'Hi there, how can I help you today?  My name is JayBot, I can answer enquiries on the MSc Data Science and MSc Artificial Intelligence course package. Please specify the course name in your query where necessary e.g. MSc Data Science or MSc artificial intelligence. Lets chat!!!',
      type: MessageType.Bot
    }
  ],
  lastQuery: { message: '', done: false },
  updateLastQuery: async (lastQuery: ILastQuery) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      chatStore: { ...state.chatStore, lastQuery: lastQuery }
    }));
  },
  updateChat: (singleChat: IChat) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      chatStore: {
        ...state.chatStore,
        chat: [...state.chatStore.chat, singleChat]
      }
    }));
  },
  updateLastChat: (updatedChat: IChat) => {
    set((state: ILangchainAppStore) => {
      const chatLength = state.chatStore.chat.length;
      if (chatLength === 0) {
        return state;
      }
      const updatedChatArray = [...state.chatStore.chat];
      updatedChatArray[chatLength - 1] = updatedChat;
      return {
        ...state,
        chatStore: {
          ...state.chatStore,
          chat: updatedChatArray
        }
      };
    });
  }
});
