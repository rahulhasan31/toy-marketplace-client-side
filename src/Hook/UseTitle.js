import { useEffect } from "react"


const useTitle= title=>{
    useEffect(()=>{
          document.title= `${title} -Sports Toys House`
    },[title])
}



export default useTitle;