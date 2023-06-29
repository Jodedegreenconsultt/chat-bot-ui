//Store
import { ILangchainAppStore } from './index';

export interface IQAStore {
  queries: string[];
  responses: string[];
  setQueries: (value: string[]) => void;
  setResponses: (value: string[]) => void;
}

export const qaStore = (set: any, get: any): IQAStore => ({
  queries: [],
  responses: [],
  setQueries: async (list: string[]) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      qaStore: { ...state.qaStore, queries: list }
    }));
  },
  setResponses: async (list: string[]) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      qaStore: { ...state.qaStore, responses: list }
    }));
  }
});
