//Store
import { ILangchainAppStore } from './index';

export interface IList {
  namespace: string;
  title: string;
  type: string;
}

export interface IInformationStore {
  list: IList[];
  setList: (value: IList[]) => void;
  selectedlist : IList;
  setSelectedList : (value : IList) => void;
}

export const informationStore = (set: any, get: any): IInformationStore => ({
  list: [],
  selectedlist : { namespace: 'data_science', title: 'Msc Data Science', type: '0' },
  setList: async (value: IList[]) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      informationStore: { ...state.informationStore, list: value }
    }));
  },
  setSelectedList: async (value: IList) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      informationStore: { ...state.informationStore, selectedlist: value }
    }));
  }
});
