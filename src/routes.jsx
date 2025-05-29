import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    href: "#home",
    element: <Home />,
  },
  {
    name: "classes",
    path: "/classes",
    href: "#classes",
    //element: <Profile />,
    element: ""
  },
  {
    name: "About",
    path: "/about",
    href: "#about",
    //element: <SignIn />,
    element: ""
  },
  {
    name: "Trainers",
    path: "/trainers",
    href: "#trainers",
    //element: <SignIn />,
    element: ""
  },
  {
    name: "Contact",
    path: "/contact",
    href: "#contact", 
    //element: <SignUp />,
    element: ""
  },
];

export default routes;
