import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "",
    href: "#home",
    element: <Home />,
  },
  {
    name: "classes",
    path: "",
    href: "#classes",
    //element: <Profile />,
    element: ""
  },
  {
    name: "About",
    path: "",
    href: "#about",
    //element: <SignIn />,
    element: ""
  },
  {
    name: "Trainers",
    path: "",
    href: "#trainers",
    //element: <SignIn />,
    element: ""
  },
  {
    name: "Contact",
    path: "",
    href: "#contact", 
    //element: <SignUp />,
    element: ""
  },
];

export default routes;
