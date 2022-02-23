import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,

    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Company List",
    icon: "content_paste",

    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
