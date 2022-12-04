import { useCallback, useState } from "react";

const useStateRef = () => {
    const [componentRef,setComponentRef] = useState<HTMLElement>()
    const handleRef = useCallback((node:HTMLElement|undefined|null) => {
        if(node)
        setComponentRef(node)
    },[])

    return {componentRef, handleRef} ;
}
 
export default useStateRef;