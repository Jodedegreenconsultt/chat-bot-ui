//Store
import { ILangchainAppStore } from './index';

export interface ISearchStore {
  queries: string[];
  responses: string[];
  setQueries: (value: string[]) => void;
  setResponses: (value: string[]) => void;
}

export const searchStore = (set: any, get: any): ISearchStore => ({
  queries: [],
  responses: [],
  setQueries: async (list: string[]) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      searchStore: { ...state.searchStore, queries: list }
    }));
  },
  setResponses: async (list: string[]) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      searchStore: { ...state.searchStore, responses: list }
    }));
  }
});
