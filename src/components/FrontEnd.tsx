import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Management from "./Management";
import { FC, useEffect, useState } from "react";
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
import { doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";
const FrontEnd: FC = () => {

    // const [front_language1, setLanguage1] = useState([]);

    // useEffect(() => {


    //     const usersCollectionRef1 = doc(db, 'front_language', 'level_1');

    //     getDoc(usersCollectionRef1).then((documentSnapshot) => {
    //         if (documentSnapshot.exists()) {
    //             setLanguage1(documentSnapshot.get('content'))
    //         }
    //     });

    // }, [])
    return (
        <ChakraProvider theme={theme}>
            <Flex w="100vw" h="100wh">
                <Flex>
                    {/* <SideMenu_temp /> */}

                    <Box w="70vw">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/account" element={<Account />} />
                            <Route path="/charts" element={<Charts />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/mailBox" element={<MailBox />} />
                            <Route path="/message" element={<Message />} />
                            <Route path="/rateReview" element={<RateReview />} />

                        </Routes>
                    </Box>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
};

export default FrontEnd;