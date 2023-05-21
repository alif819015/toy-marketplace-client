import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - SuperToyEmpire`;

    },[title])
};

export default useTitle;