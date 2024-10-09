import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
// import { io } from "socket.io-client";

const Client = () => {
  const [form] = Form.useForm();
  // const [socket, setSocket] =
  // useState<Socket<ServerToClientEvents, ClientToServerEvents>>(undefined);
  // const [text, setText] = useState<string>("");

  // useEffect(() => {
  //   const socket = io("http://localhost:5000");
  //   setSocket(socket);
  // }, []);

  // useEffect(() => {
  //   socket?.emit("newUser", "client1");
  // }, [socket]);

  // const handleClick = () => {
  //   socket?.emit("sendComment", {
  //     senderName: "client1",
  //     receiverName: "admin",
  //     text: text,
  //   });
  // };
  return (
    <>
      <h3>i'm client</h3>
      <br />
      <Form form={form}>
        <Form.Item name="message">
          <Input placeholder="message" size="large" />
        </Form.Item>
      </Form>

      <Button type="primary" size="large">
        send
      </Button>
    </>
  );
};

export default Client;
