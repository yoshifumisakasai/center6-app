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
import { useState } from "react";
// natigate関数を取得

const Language = () => {
    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1);
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
            <TodoTitle
                title="プログラミング言語"
                as="h1"
                fontSize={{ base: "2xl", md: "3xl" }}
                mt="1"
            />
            <Tabs>
                <TabList mb='1em'>
                    <Tab>未経験～</Tab>
                    <Tab>経験2～3年程度</Tab>
                    <Tab>経験5年以上</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>

                        <CheckboxGroup >
                            <Checkbox value="1" onChange={check_level_1}>HTMLタグ、属性を理解している</Checkbox>
                            <br />
                            <Checkbox value="2" onChange={check_level_1}>CSSを扱える</Checkbox>
                            <br />
                            <Checkbox value="3" onChange={check_level_1}>JavaScript文法、構文、関数、クラスの理解をしている</Checkbox>
                            <br />
                            <Checkbox value="4" onChange={check_level_1}>PHPでプログラミングができる</Checkbox>
                            <br />
                            <Checkbox value="5" onChange={check_level_1}>jQueryを扱える</Checkbox>
                        </CheckboxGroup>
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
                    </TabPanel>


                    <TabPanel>

                        <CheckboxGroup >
                            <Checkbox value="1" onChange={check_level_2}>リファレンス等を参照して不具合の調査ができる。（英語のドキュメントを含む）</Checkbox>
                            <br />
                            <Checkbox value="2" onChange={check_level_2}>単体テストやデバッグに関して、考え方や手法を理解して活用できる。</Checkbox>
                            <br />
                            <Checkbox value="3" onChange={check_level_2}>JestやTesting Libraryを用いてテストを行うことができる。</Checkbox>
                            <br />
                            <Checkbox value="4" onChange={check_level_2}>APIの仕様を理解して、バックエンドとのデータの受け渡しを行うことができる。</Checkbox>
                            <br />
                            <Checkbox value="5" onChange={check_level_2}>JavaScript の仕様に精通している。または、JavaScript を利用したプログラミングに関する高度な知識があり、それを十分活用できる。</Checkbox>
                            <br />
                            <Checkbox value="6" onChange={check_level_2}>VueであればVuexなどの状態管理ライブラリの仕様を理解し、それを十分活用できる。</Checkbox>
                            <br />
                            <Checkbox value="7" onChange={check_level_2}>ReactであればContextやReduxなどの状態管理ライブラリの仕様を理解し、それを十分活用できる。</Checkbox>
                            <br />
                            <Checkbox value="8" onChange={check_level_2}>TypeScriptについて基礎的な知識に関して十分理解しており、仕様書通りに開発を行うことができる。</Checkbox>
                            <br />
                            <Checkbox value="9" onChange={check_level_2}>React、Nexを用いたフロントエンド開発、コンポーネント作成、UI実装ができる</Checkbox>
                            <br />
                            <Checkbox value="10" onChange={check_level_2}>React、MUI、TypeScript等のモダンな技術スタックを用いた開発ができる</Checkbox>
                            <br />
                            <Checkbox value="11" onChange={check_level_2}>UIコンポーネントライブラリを使用して、仕様書通りのコーディングができる。</Checkbox>
                            <br />
                            <Checkbox value="12" onChange={check_level_2}>git/GitHub の仕組みを理解して適切に利用できる。</Checkbox>
                            <br />
                            <Checkbox value="13" onChange={check_level_2}>storybookの仕様を理解し、それを元にコンポーネント開発を行うことができる。</Checkbox>
                            <br />
                            <Checkbox value="14" onChange={check_level_2}>シンプルで他人が読みやすく理解しやすいコーディングができる</Checkbox>
                            <br />
                            <Checkbox value="15" onChange={check_level_2}>TypeScriptでの開発経験がある</Checkbox>
                            <br />
                            <Checkbox value="16" onChange={check_level_2}>ReduxやMaterial-UIなどのライブラリの知識がある</Checkbox>
                            <br />
                            <Checkbox value="17" onChange={check_level_2}>コンポーネント指向の設計ができる</Checkbox>
                            <br />
                            <Checkbox value="18" onChange={check_level_2}>バックエンドのコードを読める</Checkbox>
                            <br />
                            <Checkbox value="19" onChange={check_level_2}>フロントエンドの開発スキルを習得している</Checkbox>
                            <br />
                            <Checkbox value="20" onChange={check_level_2}>基本的なReactの概念を理解している</Checkbox>
                            <br />
                            <Checkbox value="21" onChange={check_level_2}>非同期通信の仕様を理解し、それを十分活用することができる。</Checkbox>
                            <br />
                        </CheckboxGroup>
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
                    </TabPanel>
                    <TabPanel>

                        <CheckboxGroup >
                            <Checkbox value="1" onChange={check_level_3}>他部署やPMと協働して仕様の策定ができる</Checkbox>
                            <br />
                            <Checkbox value="2" onChange={check_level_3}>工数の見積もりを正確に出すことができる</Checkbox>
                            <br />
                            <Checkbox value="3" onChange={check_level_3}>パフォーマンスを意識した実装ができる</Checkbox>
                            <br />
                            <Checkbox value="4" onChange={check_level_3}>他メンバーの可読性・拡張性を考慮したコードが書ける</Checkbox>
                            <br />
                            <Checkbox value="5" onChange={check_level_3}>効果的なリファクタリングを行うことができる</Checkbox>
                            <br />
                            <Checkbox value="6" onChange={check_level_3}>大きいタスクを分割してジュニアに指示を出すことができる</Checkbox>
                            <br />
                            <Checkbox value="7" onChange={check_level_3}>ジュニアの質問に的確に答えることができる</Checkbox>
                            <br />
                            <Checkbox value="8" onChange={check_level_3}>環境構築や技術選定が行える</Checkbox>
                            <br />
                            <Checkbox value="9" onChange={check_level_3}>バグの発見や、詳細なレビューが出来る</Checkbox>
                            <br />
                            <Checkbox value="10" onChange={check_level_3}>テストの策定やスケジューリングが出来る</Checkbox>
                        </CheckboxGroup>
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>


    )
}
export default Language;
