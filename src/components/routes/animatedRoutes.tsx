import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "components/Navigation/nav";
import { ROUTES } from "misc/const";
import BasicLayoutPage from "components/layout/basicLayoutPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location  = useLocation()
    return (
        <AnimatePresence mode="popLayout">

        <Routes location={location} key={location.pathname}>
            <Route path="/" index element={ <Nav /> } />
            {Object.entries(ROUTES).map(([location, component])=>
            <Route key={location} path={`/${location}`} element={ 
                <BasicLayoutPage id={location} >   
                {component} 
                </BasicLayoutPage>
            } />
            )}
        </Routes>
            </AnimatePresence>
    )
}
 
export default AnimatedRoutes;