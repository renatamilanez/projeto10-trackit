import UserContext from "../contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import { useState, useEffect } from "react";
import GlobalStyle from "../assets/css/globalStyles";
import LoginPage from "./LoginPage";
import SignIn from "./SignIn";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import PrivatePage from "./PrivatePage";

export default function App(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [addButton, setAddButton] = useState(false);
    const [listHabits, setListHabits] = useState(null);
    const [reloadHabits, setReloadHabits]=useState(false)
    let token = localStorage.getItem('userToken');
    const habit = {
        name: title,
        days: []
    }
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const contextValue = {
        email, setEmail, password, setPassword, name, setName, image, setImage, title, setTitle, habit, config, addButton, setAddButton, listHabits, setListHabits, reloadHabits, setReloadHabits
    };

    return(
        <UserContext.Provider value={contextValue}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage />}/>
                    <Route path='/cadastro' element={<SignIn />}/>
                    <Route path='/habitos' element={
                        <PrivatePage>
                            <Habits />
                        </PrivatePage>
                    } />
                    <Route path='/hoje' element={
                        <PrivatePage>
                                <Today />
                        </PrivatePage>
                    } />
                    <Route path='/historico' element={
                        <PrivatePage>
                            <History />
                        </PrivatePage>
                    }/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}