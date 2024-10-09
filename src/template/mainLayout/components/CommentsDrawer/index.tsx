import { Avatar, Button, Drawer, Input, List, Space, Typography } from "antd";

import { useMainLayoutContext } from "../../context";
import { useGlobalContext } from "../../../../globalContext/context";
import { useState } from "react";

const CommentsDrawer = () => {
  const { dispatch, values } = useMainLayoutContext();
  const { setOpenCommentsDrawer } = dispatch;
  const { openCommentsDrawer, comments } = values;
  const { Text } = Typography;
  const { values: valuesGlobalContext } = useGlobalContext();
  const { socket } = valuesGlobalContext;
  const [text, setText] = useState<string>("");

  const handleSendMassage = (email: string, message: string) => {
    socket?.emit("sendMessage", {
      senderEmail: "zohre@gmail.com",
      receiverEmail: email,
      message: message,
    });
  };
  return (
    <Drawer
      title="Commnets"
      open={openCommentsDrawer}
      onClose={() => setOpenCommentsDrawer(false)}
    >
      <List
        pagination={{ position: "bottom", align: "center" }}
        dataSource={comments && comments}
        renderItem={(item, index) => (
          <List.Item>
            <div className="flex flex-col gap-4 ">
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<Text>{item.email}</Text>}
                description={item.message}
              />
              <Space>
                <Input.TextArea
                  rows={2}
                  placeholder="please enter message"
                  onChange={(e) => setText(e.target.value)}
                />
                <Button
                  type="primary"
                  onClick={() => handleSendMassage(item.email!, text)}
                >
                  Send
                </Button>
              </Space>
            </div>
          </List.Item>
        )}
      />
    </Drawer>
  );
};
export default CommentsDrawer;
