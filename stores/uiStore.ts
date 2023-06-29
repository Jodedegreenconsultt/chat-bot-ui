//Store
import { ILangchainAppStore } from './index';

export interface IUIStore {
  inProgress: boolean;
  setInProgress: (value: boolean) => void;

  showSelectionPopup : boolean;
  setShowSelectionPopup: (value: boolean) => void;

  responseInProgress: boolean;
  setResponseInProgress: (value: boolean) => void;
}

export const uiStore = (set: any, get: any): IUIStore => ({
  inProgress: false,
  showSelectionPopup : false,
  responseInProgress : false,
  setInProgress: async (value: boolean) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      uiStore: { ...state.uiStore, inProgress: value }
    }));
  },
  setShowSelectionPopup: async (value: boolean) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      uiStore: { ...state.uiStore, showSelectionPopup: value }
    }));
  },
  setResponseInProgress: async (value: boolean) => {
    set((state: ILangchainAppStore) => ({
      ...state,
      uiStore: { ...state.uiStore, responseInProgress: value }
    }));
  }
});
