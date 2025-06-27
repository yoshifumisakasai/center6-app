import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Management from "./Management";
import { FC } from "react";
import Mypage from "./Mypage";
import FrontEnd from "./FrontEnd_bak";
import Skill_Check from "./Skill_Check";
import Dashboard from "./Language";
import Framework from "./Framework";
import Language from "./Language";
import FrontEndResult from "./FrontEndResult";
import Graph from "./Graph"
const App: FC = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path={`/register/`} element={<Register />} />
                    <Route path={`/login/`} element={<Login />} />
                    <Route path={`/skill_Check/`} element={<Skill_Check />} />
                    <Route path={`/`} element={<Mypage />} />



                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;