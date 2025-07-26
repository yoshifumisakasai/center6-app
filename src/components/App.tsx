import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Management from "./Management";
import { FC } from "react";
import Mypage from "./Mypage";
import Skill_Check from "./Skill_Check";
import Dashboard from "./Dashboard";
import Framework from "./Framework";
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
import PdfViewer from "./MemoizedPDFViewer";
import Kanri_Dashboard from "./Kanri_Dashboard";
import Kanri_FrontEnd from "./Kanri_FrontEnd";
import Kanri_Skill_Check from "./Kanri_Skill_Check";
import MemoizedPDFViewer from "./MemoizedPDFViewer";
import React from "react";
import Kanri_State from "./Kanri_State";
import Kanri_Framework from "./Kanri_Framework";
import Kanri_Hook from "./Kanri_Hook";
import Kanri_test_Case from "./Kanri_test_Case";
import Kanri_CSS_library from "./Kanri_CSS_library";
const App: FC = () => {
    // const MemoPDFViewer = React.memo(MemoizedPDFViewer);

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
                                    <Route path={`/`} element={<Login />} />
                                    <Route path={`/skill_Check/`} element={<Skill_Check />} />
                                    <Route path={`/mypage`} element={<Mypage />} />
                                    <Route path={`/frontEnd/`} element={<FrontEnd />} />
                                    <Route path={`/kanri_skill_Check/`} element={<Kanri_Skill_Check />} />
                                    <Route path={`/kanri_frontEnd/`} element={<Kanri_FrontEnd />} />

                                    <Route path="/kanri_dashboard/" element={<Kanri_Dashboard />} />
                                    <Route path="/kanri_state/" element={<Kanri_State />} />
                                    <Route path="/kanri_framework/" element={<Kanri_Framework />} />
                                    <Route path="/kanri_hook/" element={<Kanri_Hook />} />
                                    <Route path="/kanri_css_library/" element={<Kanri_CSS_library />} />
                                    <Route path="/kanri_ratereview/" element={<Kanri_test_Case />} />

                                    <Route path="/dashboard/" element={<Dashboard />} />
                                    <Route path="/state/" element={<State />} />
                                    <Route path="/framework/" element={<Framework />} />
                                    <Route path="/ratereview/" element={<RateReview />} />
                                    <Route path="/hook/" element={<Hook />} />
                                    <Route path="/css_library/" element={<CSS_library />} />
                                    <Route path="/management/" element={<Management />} />
                                    <Route path={`/frontEndResult/`} element={<FrontEndResult />} />
                                    <Route path={`/viewPdf/`} element={<MemoizedPDFViewer />} />

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