import { motion } from "framer-motion";
import { ReactNode } from "react";

const ComponentLink = ({children}:{children:ReactNode}) => {
    return ( <motion.div>
        {children}
    </motion.div> );
}
 
export default ComponentLink;