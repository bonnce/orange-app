import { HTMLMotionProps, motion } from "framer-motion";
import './styles.css'

interface iBasicLayout extends HTMLMotionProps<"div"> {
    id:string,
}

const BasicLayoutPage = ( props:iBasicLayout ) => {
    const { id, children, className, ...restProps } = props 
    const newClassName = `fullScreen ${className || ''}`
    return ( <motion.div layoutId={id} className={newClassName} {...restProps} >
        {children}
    </motion.div> );
}
 
export default BasicLayoutPage;