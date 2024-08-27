import React from "react";
import { FacebookOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Flex, Tooltip } from "antd";

const SocialNetworks = () => {
  return (
    <Flex align="center" justify="center" gap="small" className="w-full ">
      <Tooltip
        className=""
        title="Facebook"
        placement="bottom"
        color="#4267B2"
        key="#4267B2"
      >
        <div className=" bg-red-500 ">
          <FacebookOutlined className="h-10 w-10 bg-green-400 rounded-full flex items-center justify-center" />
        </div>
      </Tooltip>

      <Tooltip
        title="LinkedIn"
        placement="bottom"
        color="#0e76a8"
        key="#0e76a8"
      >
        <div className="h-10 w-10">
          <LinkedinOutlined />
        </div>
      </Tooltip>
    </Flex>
  );
};

export default React.memo(SocialNetworks);
