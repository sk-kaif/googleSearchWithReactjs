import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

export const AppContext = ({children}) => {
    const [imageSearch, setImageSearch] = useState(false);

    return (
        <Context.Provider value={{imageSearch,setImageSearch,}}>
            {children}
        </Context.Provider>
    );
};


export const contextReturnVal=()=>{
    return useContext(Context)
}
