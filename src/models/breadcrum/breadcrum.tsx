import { Breadcrumb } from "antd";
import { items } from "./breadcrumItemsType";

export default function BreadCrum({ members }: { members: items[] }) {
  return <Breadcrumb items={members} />;
}
