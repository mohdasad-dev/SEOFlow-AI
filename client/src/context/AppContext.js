import type { AxiosInstance } from "axios";
import axios from "axios";
import { config } from "process";
import { createContext, useState, type ReactNode } from "react";


interface User{
    id:String;
    name:String;
    email:String;
    plan:String;
    analysisCount?: number;
}
interface AppContextType{
    user: User | null;
    token: string | null;
    loading: boolean;
    axios:AxiosInstance;
    login: (email:string, password: string)=> Promise<{success: boolean; message?: string}>;
    register: (name: string, email:string, password: string)=> Promise<{success: boolean; message?: string}>;
    logout: () => void; 
}


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000"
const AppContext = createContext <AppContextType | undefined>(undefined);

export function AppProvider({children}:{children: ReactNode}){

    const [user, setUser] = useState<User | null > (null);
    const [token, setToken] = useState<string | null > (localStorage.getItem("token"));
    const [loading, setLoading] = useState(true);


    // Axios instance with auth header

    const api =  axios.create({
        baseURL:BACKEND_URL;

    })

    // update axios headers when token change

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem("token");

        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;

    })

    const login = async () => {
        
    }
    const value = {}
    return <AppContext.Provider value={}>
        {children}
    </AppContext.Provider>
}