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
    element: <Profile />,
  },
  {
    name: "About",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Contact",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
