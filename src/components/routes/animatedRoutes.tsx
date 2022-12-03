import { Route, Routes, useLocation } from "react-router-dom";
import Home from "pages/home";
import About from "pages/about";
import Contact from "pages/contact";
import { AnimatePresence } from "framer-motion"
import Nav from "components/Navigation/nav";
import { ROUTES } from "misc/const";

const AnimatedRoutes = () => {
    const location  = useLocation()
    return (
    // <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" index element={ <Nav /> } />
            {Object.entries(ROUTES).map(([location, component])=>
            <Route key={location} path={`/${location}`} element={ component } />
            )}
        </Routes>
    // </AnimatePresence>
    )
}
 
export default AnimatedRoutes;