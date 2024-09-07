import { Avatar, Drawer, List } from "antd";
import { data } from "./data";
import { useMainLayoutContext } from "../../context";

const CommentsDrawer = () => {
  const { dispatch, values } = useMainLayoutContext();
  const { setOpenCommentsDrawer } = dispatch;
  const { openCommentsDrawer } = values;
  return (
    <Drawer
      title="Commnets"
      open={openCommentsDrawer}
      onClose={() => setOpenCommentsDrawer(false)}
    >
      <List
        pagination={{ position: "bottom", align: "center" }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
};
export default CommentsDrawer;
