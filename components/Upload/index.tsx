import React, { ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Image from 'next/image';
import File from './File';
import uploadIcon from '../../public/assets/img/icon/upload-file.svg';

//Store
import langchainAppStore from '../../stores';
import { ITabType } from '../../models/allModels';

interface IUpload {
  type: ITabType;
  setFileUpload: Function;
}

const Upload: React.FC<IUpload> = ({ type, setFileUpload }) => {
  const fileList = langchainAppStore((state) => state.fileStore.fileList);
  const setFileList = langchainAppStore((state) => state.fileStore.setFileList);
  const setInProgress = langchainAppStore((state) => state.uiStore.setInProgress);
  const setResults = langchainAppStore((state) => state.summarizeStore.setResults);

  const handleUploadClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let newFiles: File[] = fileList;
      for (let k = 0; k < e.target.files.length; k++) {
        newFiles.push(e.target.files[k]);
      }
      setFileList(Array.from(newFiles));
    }
  };

  const uploadFiles = async () => {
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i]);
    }
    setInProgress(true);

    toast('Processing..........', {
      position: 'top-left',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      type: 'info'
    });

    try {
      const value = localStorage.getItem('userToken');
      let email = '';
      if (value !== undefined) {
        email = JSON.parse(value as string).email;
      }
      formData.append('email', email);
      await axios.post(`${process.env.REACT_APP_FETCH_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast('Uploading Data is completed!', {
        position: 'top-left',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'success'
      });
    } catch (error) {
      toast('Uploading Data is failed!', {
        position: 'top-left',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'error'
      });
    }
    setInProgress(false);
  };

  return (
    <div className="file-uploader min-w-[500px] px-4">
      <div className="text-center text-white font-black text-[18px] leading-[25px] py-[24px] border-b border-white/10 uppercase">
        Upload your documents
      </div>
      <div className="content">
        <div className="upload-box w-[100%]">
          <label className="w-[100%] h-[100%] flex flex-col gap-[10px] items-center justify-center pointer">
            <input type="file" multiple hidden onChange={handleUploadClick} accept=".txt,.docx,.xlsx" />
            <Image src={uploadIcon} alt="Upload" />
            <p className="text-[12px] ">Browse file to upload</p>
          </label>
        </div>
        <div className="selected-document w-[100%] px-[22px] mt-[10px] max-h-[300px] overflow-y-auto">
          <div>
            {fileList &&
              Array.from(fileList).map((item, index) => {
                return <File key={index} name={item.name} size={item.size} />;
              })}
          </div>
        </div>
        <div className="interaction-button-panel">
          <button
            className={`upload-button ${
              Array.from(fileList).length < 1 ? 'cursor-not-allowed bg-[#4d5e65]' : 'cursor-pointer bg-[#58c4f2]'
            }`}
            disabled={Array.from(fileList).length < 1}
            onClick={uploadFiles}
          >
            Let&apos;s Begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
