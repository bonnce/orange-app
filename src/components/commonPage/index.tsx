import IconButton from "components/Buttons/iconButton"
import { useNavigate } from "react-router-dom"
import './styles.css'
import orange from 'assets/orange.svg'
import {  Variants } from "framer-motion"
import { ReactNode, useState } from "react"
import { timer } from "misc/utils"

interface iCommonPage {
    title:string,
    children?:ReactNode
}

const CommonPage = (props:iCommonPage) => {
    const navigate = useNavigate()
    const [drop, setDrop] = useState(false)
    const handleClick = async ()=>{
        setDrop(true)
        await timer(500)
        navigate('/')
    }
    const variants:Variants = {
        drop:{
        position:'absolute',
        rotate:[null,15],
        y:'100vh',
        opacity:0,
        transition:{duration:.5 }
    }}
    const {title, children} = props
    return ( <div className="common">
            <IconButton className="menu-button" imgAlt="orange-menu" 
            whileHover={{
                rotate:[null,15,-5],
                cursor:'pointer',
                transition:{repeat:Infinity, repeatType:'mirror', duration:.5, repeatDelay:.1}
            }}
            variants={variants}
            animate={drop && 'drop' }
            imgSrc={orange} 
            onClick={handleClick}/>
        <h1 className="title-page">{title}</h1>
        {children}
    </div> );
}
 
export default CommonPage;