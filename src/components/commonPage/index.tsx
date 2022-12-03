import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import './styles.css'

interface iCommonPage {
    title:string
}

const CommonPage = (props:iCommonPage) => {
    const {title} = props
    const location = useLocation().pathname.replace('/','')
    return ( <motion.div className="common" layoutId={location}
    //motion  
        // initial={{opacity:0 }}
        // animate={{opacity:1}}
        // exit={{opacity:0}}
        // transition={{duration:.2, delay:0}}
    >
                <Link to="/">Menu</Link>
        <h1>{title}</h1>
    </motion.div> );
}
 
export default CommonPage;