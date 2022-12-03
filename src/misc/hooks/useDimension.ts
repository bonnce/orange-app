import { useEffect, useState } from "react";

const useDimensions = () => {
    const [dimension, setDimension] = useState({width:innerWidth, height:innerHeight})

    const handleResize = ()=>{
        setDimension({width: innerWidth, height:innerHeight})
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        return ()=>{ window.removeEventListener('resize', handleResize) }
    },[])
    return ( dimension );
}
 
export default useDimensions;