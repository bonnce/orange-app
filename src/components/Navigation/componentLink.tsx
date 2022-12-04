import BasicLayoutPage from "components/layout/basicLayoutPage";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface iLink {
    children:ReactNode
    location:string
    handleClick?:VoidFunction
}

const ComponentLink = (props:iLink) => {
    const {children,
    location,
    handleClick} = props
    
    return ( 
        <Link className="link" to={`/${location}`} style={{userSelect:'inherit', pointerEvents:'inherit'}} onClick={handleClick}>
            <div className="page-preview">
                {children}
            </div>
        </Link>
     );
}
 
export default ComponentLink;