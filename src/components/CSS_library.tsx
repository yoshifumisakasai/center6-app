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
import { MailBox } from "./MailBox";
import { Message } from "./Message";
import SideMenu_temp from "./SideMenu_temp";
import { TodoTitle } from "./TodoTitle";
import { AddIcon } from "@chakra-ui/icons";
import SideMenu_top from "./SideMenu_top";
import Firebase_css_level3 from "./Firebase_css_level3";
import Firebase_css_level1 from "./Firebase_css_level1";
import Firebase_css_level2 from "./Firebase_css_level2";
import { DocumentData } from "firebase/firestore";
const CSS_library: FC = () => {
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
    const check_level_1 = (event: any) => {

        if (level_1.includes(event.target.value)) {
            set_level_1_Form(level_1.filter((checkedValue: any) => checkedValue !== event.target.value))
        } else {
            set_level_1_Form([...level_1, event.target.value])
        }
        // チェックされていたらエラーメッセージが表示されない


    };

    const check_level_2 = (event: any) => {

        if (level_2.includes(event.target.value)) {
            set_level_2_Form(level_2.filter((checkedValue: any) => checkedValue !== event.target.value))
        } else {
            set_level_2_Form([...level_2, event.target.value])
        }
        // チェックされていたらエラーメッセージが表示されない


    };



    const check_level_3 = (event: any) => {

        if (level_3.includes(event.target.value)) {
            set_level_3_Form(level_3.filter((checkedValue: any) => checkedValue !== event.target.value))
        } else {
            set_level_3_Form([...level_3, event.target.value])
        }
        // チェックされていたらエラーメッセージが表示されない


    };
    interface HomeEntity {
        level1: {},
        level2: {},
        level3: {}
    }

    // const entity: HomeEntity = {
    //     level1: level_1.join(', '),
    //     level2: level_2.join(', '),
    //     level3: level_3.join(', ')
    // };
    const entity: HomeEntity = {
        level1: level_1,
        level2: level_2,
        level3: level_3
    };

    return (
        <>
            <ChakraProvider theme={theme}>

                <Flex w="100vw" h="100wh" >

                    <Flex direction="column">
                        <TodoTitle
                            title="CSS ライブラリ機能"
                            as="h1"
                            fontSize={{ base: "xl", md: "xl" }}
                            mt="1"
                        />
                        <Tabs>
                            <TabList mb='1em'>
                                <Tab>Level1</Tab>
                                <Tab>Leve2</Tab>
                                <Tab>Level3</Tab>
                            </TabList>
                           <TabPanels>

                                <TabPanel>
                                    <Firebase_css_level1 handleValueChange1={handleValueChange1} />
                                </TabPanel>


                                <TabPanel>
                                    <Firebase_css_level2 handleValueChange2={handleValueChange2} />
                                </TabPanel>


                                <TabPanel>
                                    <Firebase_css_level3 handleValueChange3={handleValueChange3} />
                                </TabPanel>

                            </TabPanels>
                        </Tabs>
                    </Flex>
                </Flex>
            </ChakraProvider>
        </>
    );
};

export default CSS_library;