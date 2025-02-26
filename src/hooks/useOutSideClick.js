import { useEffect, useRef } from "react"

export function useOutsideClick(handeler,listenCapturing=true){
    const ref=useRef()
     useEffect(function(){
        function handelClick(e){
          if(ref.current && !ref.current.contains(e.target)){
            handeler()
           
          }
        }
        document.addEventListener('click',handelClick,listenCapturing)
        return ()=>document.removeEventListener('click',handelClick,listenCapturing)
      },[handeler,listenCapturing])

      return ref
}