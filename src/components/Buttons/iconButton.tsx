import { HTMLMotionProps, motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

interface iIconButton extends HTMLMotionProps<"button">  {
    imgSrc:string,
    imgAlt:string
}

const IconButton = (props: iIconButton ) => {
    const {imgSrc, imgAlt, children, ...restProps} = props
    return ( 
        <motion.button {...restProps} >
            {children}
            <img src={imgSrc} alt={imgAlt} style={{width:'100%', height:'100%'}} />
        </motion.button>
     );    
}
 
export default IconButton;