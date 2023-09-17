import { useState } from "react"

export const useProductsOptions = () =>{
    const [isVisible,setisVisible] = useState(false)
    
    return{
        states:{
            isVisible,
        },
        actions:{
            setisVisible
        }
}
}