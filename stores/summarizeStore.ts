//Store
import { ILangchainAppStore } from './index';
import { ISummarizeData } from '../models/allModels';

export interface ISummarizeStore {
  results: ISummarizeData[];
  setResults: (list: ISummarizeData[]) => void;
}

export const summarizeStore = (set: any, get: any): ISummarizeStore => ({
  results: [],
  setResults: async (list: ISummarizeData[]) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      summarizeStore: { ...state.summarizeStore, results: list }
    }));
  }
});
