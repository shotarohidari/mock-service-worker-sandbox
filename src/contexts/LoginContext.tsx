import { createContext, useContext, useState } from "react";

const LoginContext = createContext<ILoginContext|undefined>(undefined);
type ILoginContext = {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
export const LoginContextWrapper = ({children}:{children:any}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if(!context) {
        throw new Error("コンテキストコンポーネントでラップしているか確認してください");
    }
    return context;
}