import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";


function App() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  
    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 100);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className={scrolled ? "container fixed left-2/4 z-50 mx-auto -translate-x-2/4 p-4 transition-colors duration-300 bg-black shadow-md" : "container fixed left-2/4 z-50 mx-auto -translate-x-2/4 p-4 transition-colors duration-300 bg-transparent"}>
          <Navbar routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
