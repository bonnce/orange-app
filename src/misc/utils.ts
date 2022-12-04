export const getTransition = (node:HTMLElement)=> {            
    // get translation in x
    const style = window.getComputedStyle(node);
    const matrix = new WebKitCSSMatrix(style.transform);
    const posX = matrix.m41
    return posX
        
}

export const timer = (ms:number) => new Promise((resolve)=>{
    setTimeout(resolve, ms);
})