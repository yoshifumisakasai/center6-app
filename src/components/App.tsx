import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Management from "./Management";
import { FC } from "react";
import Mypage from "./Mypage";
import Skill_Check from "./Skill_Check";
import Dashboard from "./Dashboard";
import Framework from "./Framework";
import Language from "./Language";
import FrontEndResult from "./FrontEndResult";
import Graph from "./Graph"
import Account from "./State";
import { SideMenu } from "./SideMenu";
import { Box, ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { TopHeader } from "./TopHeader";
import Charts from "./Hook";
import { MailBox } from "./MailBox";
import { Message } from "./Message";
import RateReview from "./RateReview";
import SideMenu_top from "./SideMenu_top";
import FrontEnd from "./FrontEnd";
import CSS_library from "./CSS_library";
import Hook from "./Hook";
import State from "./State";
const App: FC = () => {
    return (
        <ChakraProvider theme={theme}>
            <Flex w="100vw" h="100wh">
                <TopHeader />
                <Box mt="100px">
                    <Flex>
                        <BrowserRouter>
                            <Box w="70vw">
                                <Routes>
                                    <Route path={`/register/`} element={<Register />} />
                                    <Route path={`/login/`} element={<Login />} />
                                    <Route path={`/skill_Check/`} element={<Skill_Check />} />
                                    <Route path={`/`} element={<Mypage />} />
                                    <Route path={`/frontEnd/`} element={<FrontEnd />} />
                                    <Route path="/dashboard/" element={<Dashboard />} />
                                    <Route path="/state/" element={<State />} />
                                    <Route path="/framework/" element={<Framework />} />
                                    <Route path="/ratereview/" element={<RateReview />} />
                                    <Route path="/hook/" element={<Hook />} />
                                    <Route path="/css_library/" element={<CSS_library />} />
                                    <Route path="/management/" element={<Management />} />
                                    <Route path={`/frontEndResult/`} element={<FrontEndResult />} />

                                </Routes>
                            </Box>
                        </BrowserRouter>
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default App;