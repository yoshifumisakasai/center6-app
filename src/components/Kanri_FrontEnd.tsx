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
import SideMenu_temp from "./SideMenu_temp";
import SideMenu_top from "./SideMenu_top";
import Kanri_Dashboard from "./Kanri_Dashboard";
const Kanri_FrontEnd: FC = () => {
    return (
        <ChakraProvider theme={theme}>
            <Flex w="100vw" h="100wh">
                <Flex>
                    {/* <SideMenu_temp /> */}

                    <Box w="70vw">
                        <Routes>
                            <Route path="/" element={<Kanri_Dashboard />} />
                            <Route path="/kanri_dashboard" element={<Kanri_Dashboard />} />
                        </Routes>
                    </Box>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
};

export default Kanri_FrontEnd;