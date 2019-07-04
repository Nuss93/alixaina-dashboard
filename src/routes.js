import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";

// import Vehicles from "views/Vehicles.jsx";
// import Plexis from "views/Plexis.jsx";
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





  // ==================== BUILT IN EXAMPLES ====================
  // Change display to true to display in sidebar
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
    display: false,
    drop: false,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    display: false,
    drop: false,
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
    display: false,
    drop: false,
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    display: false,
    drop: false,
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    display: false,
    drop: false,
  },
  { redirect: true, path: "/", pathTo: "/admin/index", name: "Dashboard" }
];
export default routes;
