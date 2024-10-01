import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { UPLOAD } from "./components/uploadParts";
import { RcFile } from "antd/es/upload";

interface IContext {
  values: {
    selectedFile: RcFile | undefined;
    uploadStep: string;
  };
  dispatch: {
    setSelectedFile: Dispatch<SetStateAction<any>>;
    setUploadStep: Dispatch<SetStateAction<string>>;
  };
}

export const CustomerByFileContext = createContext<IContext>({
  values: {
    selectedFile: undefined,
    uploadStep: UPLOAD.selectFile, //"selectFile"
  },
  dispatch: {
    setUploadStep: () => {},
    setSelectedFile: () => {},
  },
});

export const CustomerByFileProvider: FC<PropsWithChildren> = ({ children }) => {
  const [step, setStep] = useState<string>(UPLOAD.selectFile);
  const [selectedFile, setSelectedFile] = useState<RcFile>();

  const sharedValues: IContext = {
    values: {
      uploadStep: step,
      selectedFile: selectedFile,
    },
    dispatch: {
      setUploadStep: setStep,
      setSelectedFile: setSelectedFile,
    },
  };

  return (
    <CustomerByFileContext.Provider value={sharedValues}>
      {children}
    </CustomerByFileContext.Provider>
  );
};

export const useCustomerByFileContext = () => useContext(CustomerByFileContext);
