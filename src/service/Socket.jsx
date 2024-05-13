import React, { useMemo } from "react";
import { io } from "socket.io-client";

const SocketContext = React.createContext(null);

export const useSocket = () => {
  return React.useContext(SocketContext);
};

export const SocketProvider = (props) => {
  const socket = useMemo(() => io("https://fluffy-umbrella-4r6pjq6469r2q696-8000.app.github.dev"), []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};
