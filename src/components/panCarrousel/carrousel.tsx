import { motion } from "framer-motion"
import useDimensions from "misc/hooks/useDimension"
import { forwardRef, ReactNode, useMemo, useRef } from "react"
import './styles.css'

interface iCarrousel {
    children: ReactNode,
    initialPos?:string | number,
    columnWidth?:string | number
}

const Carrousel = forwardRef<HTMLDivElement, iCarrousel>((props:iCarrousel, ref) => {
    const { children, initialPos, columnWidth } = props
    const containerRef = useRef<HTMLDivElement>(null)
    const { width } = useDimensions()
    const isMobile = useMemo (()=> width < 920, [width])

    return ( <div
        className="window" ref={containerRef} >
            <motion.div drag={isMobile && 'x'} 
            whileTap={{ cursor: isMobile ? "grabbing" : 'auto' }} 
            initial={{x:isMobile ? initialPos : 0}}
            dragConstraints={containerRef} ref={ref}
            style={{ gridAutoColumns: columnWidth }}
            className="draggable">
                {children}
            </motion.div>
        </div> );
})
 
export default Carrousel;