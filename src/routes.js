import Index from "views/Index.jsx";
import Guestlist from "views/Guestlist";
import Guestbook from "views/Guestbook";
import WIP from "views/WIP.jsx";

var routes = [
  {
    path: "/index",
    name: "Overview",
    icon: "fas fa-tachometer-alt fa-1x text-default",
    component: Index,
    layout: "/admin",
    display: true,
    drop: false,
  },
  // ADD ON
  {
    path: "/guestlist",
    name: "Guestlist",
    icon: "fas fa-tasks fa-1x text-default",
    component: Guestlist,
    layout: "/admin",
    display: true,
    drop: false,
  },
  {
    path: "/guestbook",
    name: "Guestbook",
    icon: "fas fa-book fa-1x text-default",
    component: Guestbook,
    layout: "/admin",
    display: true,
    drop: false,
  },
  { redirect: true, path: "/", pathTo: "/admin/index", name: "Dashboard" }
];
export default routes;
