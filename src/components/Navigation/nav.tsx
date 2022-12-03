import IconButton from "components/Buttons/iconButton";
import { AnimatePresence, DragControls, motion, useDragControls, useMotionValue } from "framer-motion";
import { ROUTES } from "misc/const";
import useDimensions from "misc/hooks/useDimension";
import About from "pages/about";
import Contact from "pages/contact";
import Home from "pages/home";
import { EventHandler, HtmlHTMLAttributes, MouseEventHandler, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Nav = () => {
    const { width } = useDimensions()
    const isMobile = width < 920
    const containerRef = useRef<HTMLDivElement>(null)
    const [draggerRef,setDraggerRef] = useState<HTMLUListElement>()
    const lastX = useMemo(()=> Number(localStorage.getItem('last-drag-x')) || 0,[])    

    const handleDragger = useCallback((node:HTMLUListElement) => {
        if(node)
        setDraggerRef(node)
    },[])

    const handleNav = ()=> {            
        if(draggerRef){
            // get translation in x
            const style = window.getComputedStyle(draggerRef);
            const matrix = new WebKitCSSMatrix(style.transform);
            const posX = matrix.m41
            localStorage.setItem('last-drag-x', posX.toString()) 
        }
    }

    return ( 
        <motion.nav className="navigation">
            <div
            className="window" ref={containerRef} >

                <motion.ul drag={isMobile && 'x'} whileTap={{ cursor: isMobile ? "grabbing" : 'auto' }} 
                initial={{x:lastX}}
                  dragConstraints={containerRef} ref={handleDragger}
                  className="link-container">
                    {Object.entries(ROUTES).map(([key,value])=>
                    <motion.li className="item" key={key} id={key} layoutId={key}>
                        <Link className="link" to={`/${key}`} onClick={handleNav}>
                            <div className="page-preview">
                                {value}
                            </div>
                        </Link>
                    </motion.li>
                        )}
                </motion.ul>
            </div>
        </motion.nav> 
    );
}
 
export default Nav;