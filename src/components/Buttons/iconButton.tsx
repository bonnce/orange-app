import { ButtonHTMLAttributes } from "react";

interface iIconButton extends ButtonHTMLAttributes<HTMLButtonElement>  {
    path:string,

}


const IconButton = (props: iIconButton ) => {
    return ( 
        <button {...props} >
            Abrir
        </button>
     );    
}
 
export default IconButton;