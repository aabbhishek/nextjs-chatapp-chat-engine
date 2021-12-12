import React, {useState, createContext} from "react"; 

export const Context = createContext(); /// Initializes instance of context API.


export const ContextProvider = (props)=>{ // Provider - child of provider will have access to its state.
    const [username,setUsername]=useState("");
    const [secret, setSecret] = useState("");

    const value ={
        username,
        setUsername,
        secret,
        setSecret
    };


    return <Context.Provider value={value}>{props.children}</Context.Provider>
}