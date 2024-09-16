import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routesUrls";
export const breadcrumMembers = [
  {
    title: <Link to={ROUTES.customers}>Customer's List</Link>,
  },
  {
    title: " Edit Customer",
  },
];
