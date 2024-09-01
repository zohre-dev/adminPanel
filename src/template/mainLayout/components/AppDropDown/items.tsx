import { Anchor } from "antd";

const items = [
  {
    key: "1",
    label: (
      <Anchor
        items={[
          {
            key: "1",
            href: "https://www.antgroup.com",
            title: "Basic demo",
          },
        ]}
      />
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

export const dropDownItems = {
  items,
};
