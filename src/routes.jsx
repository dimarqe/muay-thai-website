import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "classes",
    path: "/profile",
    //element: <Profile />,
    element: ""
  },
  {
    name: "About",
    path: "/sign-in",
    //element: <SignIn />,
    element: ""
  },
  {
    name: "Contact",
    path: "/sign-up",
    //element: <SignUp />,
    element: ""
  },
];

export default routes;
