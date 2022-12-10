import BasicLayoutPage from "components/layout/basicLayoutPage";
import LoadComponent from "components/lazyLoad";
import Carrousel from "components/panCarrousel/carrousel";
import { motion, useInView } from "framer-motion";
import { ROUTES } from "misc/const";
import useDimensions from "misc/hooks/useDimension";
import useStateRef from "misc/hooks/useStateRef";
import { getTransition } from "misc/utils";
import { Suspense, useCallback, useMemo, useRef, useState, LazyExoticComponent, ReactNode, lazy } from "react";
import { Link } from "react-router-dom";
import ComponentLink from "./componentLink";
import './styles.css'

const Nav = () => {
    const ITEMSWIDTH = 12
    const ITEMSHEIGHT = 20
    const {width} = useDimensions()
    const {componentRef, handleRef} = useStateRef()
    const lastX = useMemo(()=> (Number(localStorage.getItem('last-drag-x'))),[])
    const margin = useMemo(()=> {
        const em = ITEMSWIDTH * 16
        return em > width /2  ? em / 2 : em  
    },[width])
console.log(margin)
    const handleNav = ()=> {            
        if(componentRef){
            // get translation in x
            const posX = getTransition(componentRef)
            localStorage.setItem('last-drag-x', posX.toString()) 
        }
    }



    return ( 
        <nav className="navigation">
            <h1 className="title">Welcome to Orange App</h1>

            <Carrousel  ref={handleRef} initialPos={lastX} columnWidth={`${ITEMSWIDTH}em`} >

                    {Object.entries(ROUTES).map(([location, component])=>
                    <BasicLayoutPage className="item" id={location} layoutId={location}
                    initial="hidden"
                    key={location}
                    whileInView="visible"
                    viewport={{margin:`-${margin}px`}} 
                    variants={{
                        visible:{height:`${ITEMSHEIGHT}em`, opacity: 1},
                        hidden:{height:`${ITEMSHEIGHT - 5}em`, opacity:.8}
                    }}
                    >
                            {/* <Suspense fallback={<div>loading...</div>} > */}
                        <ComponentLink location={location} handleClick={handleNav}>
                            {LoadComponent(component)} 
                        </ComponentLink>
                            {/* </Suspense> */}
                    </BasicLayoutPage>
                        )}
            </Carrousel>
        </nav> 
    );
}
 
export default Nav;