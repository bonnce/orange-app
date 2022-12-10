import { HTMLMotionProps, motion, MotionStyle } from "framer-motion";
import { splitUnit } from "misc/utils";
import { CSSProperties, HTMLAttributes, ReactNode, useMemo, useState } from "react";
import './styles.css'

interface iCard extends  HTMLMotionProps<'div'>{
    width:string | number
    maxHeight:string | number
    titleCard:string
    contentCard?:string
    linearGradient?:boolean
    colors?:string | string[]
}

const NormalCard = (props:iCard) => {
    const {className, children,
        width,
        maxHeight,
        titleCard,
        contentCard,
        colors,
        linearGradient,
        style,
        ...restProps} = props

    const newClassName = `card ${className || ''}`
    const backgroundColor = colors && (typeof colors === 'string'? colors :
    linearGradient ? `linear-gradient(45deg,${colors.join(',')})`:
    `radial-gradient(circle,${colors.join(',')})`)
    const {value : widthVal, unit:widthUnit} = splitUnit(width)
    const {value : heightVal, unit:heightUnit} = splitUnit(maxHeight)
    // const fontSize = useMemo(()=> Math.sqrt(widthVal * heightVal),[])

    const newStyles:MotionStyle = {...style, backgroundImage:backgroundColor, 
    padding:'.15em',
    width:`min(calc(100% - .3em), ${widthVal}${widthUnit})`, 
    // fontSize:`${fontSize}${widthUnit}`
    }

    return (
    <motion.div whileHover={{height:'auto'}} whileTap={{height:'auto'}} 
        initial={{height:`${heightVal}${heightUnit}`}}
    {...restProps} className={newClassName} style={newStyles}  >
        <h3 className="title-card">{titleCard}</h3>
        <div className="divisor-card" />
        <p className="content-card">{contentCard}</p>
        {children}
    </motion.div> );
}
 
export default NormalCard;