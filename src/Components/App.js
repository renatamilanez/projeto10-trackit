
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import GlobalStyle from "../assets/css/globalStyles";
import LoginPage from "./LoginPage";
import SignIn from "./SignIn";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";

export default function App(){
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage />}/>
                    <Route path='/cadastro' element={<SignIn />}/>
                    <Route path='/habitos' element={<Habits />} />
                    <Route path='/hoje' element={<Today />} />
                    <Route path='/historico' element={<History />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}