import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Management from "./Management";
import { FC, useState } from "react";
import Mypage from "./Mypage";
import Skill_Check from "./Skill_Check";
import Framework from "./Framework";
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
import Lan from "./Lan";
import State from "./State";
import CSS_library from "./CSS_library";
import Hook from "./Hook";
import RateReview from "./RateReview";
const Dashboard: FC = (props: any) => {

    const [css_level_1, set_css_level_1_Form] = useState<any>([]);
    const [css_level_2, set_css_level_2_Form] = useState<any>([]);
    const [css_level_3, set_css_level_3_Form] = useState<any>([]);

    const insert_Inventory_css_level1 = (css: any) => {
        set_css_level_1_Form(css);
    };
    const insert_Inventory_css_level2 = (css: any) => {
        set_css_level_2_Form(css);
    };

    const insert_Inventory_css_level3 = (css: any) => {
        set_css_level_3_Form(css);
    };



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

                    <Flex direction="column">

                        <Tabs>
                            <TabList mb='1em'>
                                <Tab>言語</Tab>


                                <Tab>フレームワーク</Tab>
                                <Tab>状態管理</Tab>
                                <Tab>CSSライブラリ</Tab>
                                <Tab>フック</Tab>
                                <Tab>テスト管理</Tab>
                            </TabList>
                            <TabPanels>

                                <TabPanel>
                                    <Lan insert_Inventory_css_level1={insert_Inventory_css_level1}/>
                                </TabPanel>

                                <TabPanel>
                                    <Framework />
                                </TabPanel>

                                <TabPanel>
                                    <State />
                                </TabPanel>

                                <TabPanel>
                                    <CSS_library />
                                </TabPanel>

                                <TabPanel>
                                    <Hook />
                                </TabPanel>

                                <TabPanel>
                                    <RateReview />
                                </TabPanel>

                            </TabPanels>
                            <Button
                                onClick={next}
                                colorScheme="pink"
                                variant="outline"
                                size="sm"
                                leftIcon={<AddIcon />}
                                mt="8">判定
                            </Button>
                            <Button
                                onClick={goBack}
                                colorScheme="blue"
                                variant="outline"
                                size="sm"
                                leftIcon={<AddIcon />}
                                mt="8">戻る
                            </Button>
                        </Tabs>
                    </Flex>
                </Flex>
            </ChakraProvider>

        </>
    );
};

export default Dashboard;