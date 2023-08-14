import { IconContext } from "react-icons";
import { AuthProvider } from "./context/AuthContext";
import NavigationScroll from "./Helpers/NavigationScroll";
import TheRoutes from "./routes";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

const TRACKING_ID = "G-R0CJ5H2V5Z";

ReactGA.initialize(TRACKING_ID);
function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <AuthProvider>
      <NavigationScroll>
        <IconContext.Provider
          value={{
            color: "#464646",
            size: 36,
          }}
        >
          <TheRoutes />
        </IconContext.Provider>
      </NavigationScroll>
    </AuthProvider>
  );
}

export default App;
