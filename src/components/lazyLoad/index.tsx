import { LazyExoticComponent, Suspense } from "react"

const LoadComponent = (component:LazyExoticComponent<()=>JSX.Element>)=>{
    const Component = component
    return <Suspense fallback={<div>...</div>}>
    <Component />
    </Suspense> 
}

export default LoadComponent