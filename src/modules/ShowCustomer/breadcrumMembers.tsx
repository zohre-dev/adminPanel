import { Link } from "react-router-dom";
import { items } from "../../models/breadcrum/breadcrumItemsType";
import { ROUTES } from "../../routes/routesUrls";

export const breadcrumMembers: items[] = [
  {
    title: <Link to={ROUTES.customers}>Customer's List</Link>,
  },
  {
    title: "View Customer",
  },
];
