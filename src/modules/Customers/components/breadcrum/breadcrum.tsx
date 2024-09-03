import { Breadcrumb } from "antd";
import { breadcrumItems } from "./items";

export default function BreadCrum() {
  return <Breadcrumb items={breadcrumItems} />;
}
