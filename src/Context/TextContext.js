import { createContext,useContext } from "react";


export const TextContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
    textinput: "",
    setTextinput: () => {}
})

export const TextProvider = TextContext.Provider

export default function useText(){
    return useContext(TextContext)
}