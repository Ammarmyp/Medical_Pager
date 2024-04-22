import React from "react";
import { Dispatch, SetStateAction } from "react"

interface GyphyContextType {
    giphyState: boolean
    setGiphyState: Dispatch<SetStateAction<boolean>>;

}

 const GiphyContext =  React.createContext<GyphyContextType>({} as GyphyContextType);

 export default GiphyContext;
