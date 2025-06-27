"use client"

import { Checkbox, Container, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react"
import { CheckboxGroup } from "@chakra-ui/react";
import { TodoTitle } from "./TodoTitle";
import { Tabs } from "@chakra-ui/react";
import { Paper } from "@mui/material";
import { AddIcon } from "@chakra-ui/icons";
import { SideMenu } from "./SideMenu";
// ルーティング設定に必要なものをimport
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import {
    ChakraProvider,
    Box,
    Button,
    Flex,
    Icon,
    Image,
    theme,
} from "@chakra-ui/react";
import Framework from "./Framework";
import Language from "./Language";
import { TopHeader } from "./TopHeader";
import Dashboard from "./Dashboard";
import SideMenu_temp from "./SideMenu_temp";
import  Account  from "./State";

const FrontEnd = () => {
    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1);
    };
    return (
        <>

            <ChakraProvider theme={theme}>
                {/* Headerコンポーネントとして切り出す */}
                <Flex w="100vw" h="100wh">
                    <TopHeader />
                    <Box mt="100px">
                        <Flex>
                            {/* SideMenuコンポーネントとして切り出す */}
                            <SideMenu_temp />
                            <Box w="70vw">
                                <p>ssssss</p>
                                {/* サイドメニューアイコンをクリックする度にここが切り替わる */}
                                <Routes>
                                    <Route path={`/dashboard/`} element={<Dashboard />} />
                                    <Route path={`.account/`} element={<Account />} />
                                </Routes>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </ChakraProvider>
            <Button
                onClick={goBack}
                colorScheme="pink"
                leftIcon={<AddIcon />}
                mt="8">戻る
            </Button>

        </>


    )
}
export default FrontEnd;
