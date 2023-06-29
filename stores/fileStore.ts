//Store
import { ILangchainAppStore } from './index';

export interface IFileStore {
  fileList: File[];
  setFileList: (list: File[]) => void;
}

export const fileStore = (set: any, get: any): IFileStore => ({
  fileList: [],
  setFileList: async (list: File[]) => {
    console.log(list);
    set((state: ILangchainAppStore) => ({
      ...state,
      fileStore: { ...state.fileStore, fileList: list }
    }));
  }
});
