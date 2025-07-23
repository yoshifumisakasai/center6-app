import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Management from "./Management";
import { FC, useState } from "react";
import Mypage from "./Mypage";
import Skill_Check from "./Skill_Check";
import Framework from "./Framework";
import Language from "./Language";
import FrontEndResult from "./FrontEndResult";
import Graph from "./Graph"
import Account from "./State";
import { SideMenu } from "./SideMenu";
import { Box, Button, ChakraProvider, Checkbox, CheckboxGroup, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, theme } from "@chakra-ui/react";
import { TopHeader } from "./TopHeader";
import Charts from "./Hook";
import { MailBox } from "./MailBox";
import { Message } from "./Message";
import SideMenu_temp from "./SideMenu_temp";
import { TodoTitle } from "./TodoTitle";
import { AddIcon } from "@chakra-ui/icons";
import SideMenu_top from "./SideMenu_top";
import Firebase_db from "./Firebase_db_level3";
import Firebase_db_level2 from "./Firebase_db_level2";
import Firebase_db_level3 from "./Firebase_db_level3";
import Firebase_db_level1 from "./Firebase_db_level1";
import { DocumentData } from "firebase/firestore";
import Kanri_SideMenu_temp from "./Kanri_SideMenu_temp";
import Kanri_Firebase_db_level1 from "./Kanri_Firebase_db_level1";
import Kanri_Firebase_db_level3 from "./Kanri_Firebase_db_level3";
import Kanri_Firebase_db_level2 from "./Kanri_Firebase_db_level2";
import Kanri_Firebase_State_level1 from "./Kanri_Firebase_State_level1";
import Kanri_Firebase_State_level2 from "./Kanri_Firebase_State_level2";
import Kanri_Firebase_State_level3 from "./Kanri_Firebase_State_level3";
const Kanri_State: FC = () => {
    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1);
    };
    const [parentState, setParentState] = useState<DocumentData>([]);
    const handleValueChange1 = (newValue: any) => {
        set_level_1_Form(newValue);
    };

    const handleValueChange2 = (newValue: any) => {
        set_level_2_Form(newValue);
    };

    const handleValueChange3 = (newValue: any) => {
        set_level_3_Form(newValue);
    };

    const [level_1, set_level_1_Form] = useState<any>([]);
    const [level_2, set_level_2_Form] = useState<any>([]);
    const [level_3, set_level_3_Form] = useState<any>([]);

    const next = () => {
        navigate("/frontEndResult/", { state: entity })
    }

    interface HomeEntity {
        level1: {},
        level2: {},
        level3: {}
    }

    const entity: HomeEntity = {
        level1: level_1,
        level2: level_2,
        level3: level_3
    };

    return (
        <>
            <ChakraProvider theme={theme}>
                <Flex w="100vw" h="100wh" >
                    <SideMenu_top />
                    <Kanri_SideMenu_temp />

                    <Flex direction="column">
                        <TodoTitle
                            title="ステート管理"
                            as="h1"
                            fontSize={{ base: "xl", md: "xl" }}
                            mt="1"
                        />
                        <Tabs>
                            <TabList mb='1em'>
                                <Tab>Level1</Tab>
                                <Tab>Level2</Tab>
                                <Tab>Level3</Tab>
                            </TabList>
                            <TabPanels>

                                <TabPanel>
                                    <Kanri_Firebase_State_level1 />
                                </TabPanel>


                                <TabPanel>
                                    <Kanri_Firebase_State_level2 />
                                </TabPanel>


                                <TabPanel>
                                    <Kanri_Firebase_State_level3 />
                                </TabPanel>

                            </TabPanels>
                            
                        </Tabs>
                    </Flex>
                </Flex>
            </ChakraProvider>

        </>
    );
};

export default Kanri_State;