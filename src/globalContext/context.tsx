import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  receiveMessage: ({
    senderEmail,
    message,
  }: {
    senderEmail: string;
    message: string;
  }) => void;
}

interface ClientToServerEvents {
  newUser: (username: string) => void;
  sendMessage: ({
    senderEmail,
    receiverEmail,
    message,
  }: {
    senderEmail: string;
    receiverEmail: string;
    message: string;
  }) => void;
}

interface IContext {
  values: {
    socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  };
  dispatch: {
    setSocket: Dispatch<
      SetStateAction<
        Socket<ServerToClientEvents, ClientToServerEvents> | undefined
      >
    >;
  };
}
export const GlobalContext = createContext<IContext>({
  values: {
    socket: undefined,
  },
  dispatch: {
    setSocket: () => {},
  },
});

export const GlobalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] =
    useState<Socket<ServerToClientEvents, ClientToServerEvents>>();
  const sharedValues: IContext = {
    values: {
      socket: socket,
    },
    dispatch: {
      setSocket: setSocket,
    },
  };
  return (
    <GlobalContext.Provider value={sharedValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
