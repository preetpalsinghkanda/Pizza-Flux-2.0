import { useState } from "react";
import PizzaContext from "./Context";

export const PizzaContextProvider =({children})=>{


    const [page , setPage] = useState("home")

    return(
        <PizzaContext.Provider value={page , setPage}>
            {children}
        </PizzaContext.Provider>
    )
}