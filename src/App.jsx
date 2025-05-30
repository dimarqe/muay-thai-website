import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";


function App() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  
    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 300);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className={scrolled ? "fixed mx-auto left-2/4 z-50 -translate-x-2/4 p-4 transition-colors duration-300 bg-black shadow-md bg-opacity-50 min-w-full lg:px-72 p-0" : "fixed mx-auto left-2/4 z-50 -translate-x-2/4 p-4 transition-colors duration-300 bg-transparent min-w-full lg:px-72 p-0"}>
          <Navbar routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </>
  );
}

export default App;
