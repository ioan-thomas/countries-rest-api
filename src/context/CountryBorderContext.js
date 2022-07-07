import { createContext, useState } from "react";

export const BorderContext = createContext();

export function BorderContextProvider({children}) {

    const [borders, setBorders] = useState({})
    // console.log(borders)

    const addBorders = theBorders => {
        setBorders(theBorders)
    }

  return (
    <BorderContext.Provider value={{borders, addBorders}}>
        {children}
    </BorderContext.Provider>
  )
}
