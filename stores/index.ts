import { create, StoreApi, UseBoundStore } from 'zustand';
import { fileStore, IFileStore } from './fileStore';
import { uiStore, IUIStore } from './uiStore';
import { summarizeStore, ISummarizeStore } from './summarizeStore';
import { searchStore, ISearchStore } from './searchStore';
import { qaStore, IQAStore } from './qaStore';
import { informationStore, IInformationStore } from './informationStore';
import { chatStore, IChatStore } from './chatStore';

import { devtools } from 'zustand/middleware';

export interface ILangchainAppStore {
  fileStore: IFileStore;
  uiStore: IUIStore;
  summarizeStore: ISummarizeStore;
  searchStore: ISearchStore;
  qaStore: IQAStore;
  informationStore: IInformationStore;
  chatStore: IChatStore;
}

const langchainAppStore: UseBoundStore<StoreApi<ILangchainAppStore>> = create(
  devtools((set, get) => ({
    fileStore: fileStore(set, get),
    uiStore: uiStore(set, get),
    summarizeStore: summarizeStore(set, get),
    searchStore: searchStore(set, get),
    qaStore: qaStore(set, get),
    informationStore: informationStore(set, get),
    chatStore: chatStore(set, get)
  }))
);

export default langchainAppStore;
