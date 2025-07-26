import { useState, useEffect, FC } from 'react';
import { db } from './FirebaseConfig';
import { collection, doc, DocumentData, getDoc, getDocs, getDocsFromServer } from 'firebase/firestore';
import { useTransform } from 'framer-motion';
import { Button, Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';

const Firebase_framework_level2 = (props: any) => {

    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1);
    };
    const [Framework_level_2, set_Framework_level_2_Form] = useState<any>([]);


    const next = () => {
        navigate("/frontEndResult/", { state: entity })
    }
    const check_level_1 = (event: any) => {

        // console.log('event.target.valueの中身は',event.target.value)
        //下記値は、インデックス番号
        if (Framework_level_2.includes(event.target.value)) {
            set_Framework_level_2_Form(Framework_level_2.filter((checkedValue: any) => checkedValue !== event.target.value));
            // console.log('[Include]チェックボックスChecked個数', level_1);
        } else {
            Framework_level_2.push(event.target.value);
            set_Framework_level_2_Form(Framework_level_2);
            // console.log('NO_INCLUDE',event.target.value);
            // console.log('[No_Include]チェックボックスChecked個数', level_1);

        }
        // チェックされていたらエラーメッセージが表示されない

        props.handleValueChange1(Framework_level_2);
        // console.log('Checked個数', level_1);
    };


    interface HomeEntity {
        Framework_level_2: {}
    }

    // const entity: HomeEntity = {
    //     level1: level_1.join(', '),
    //     level2: level_2.join(', '),
    //     level3: level_3.join(', ')
    // };
    const entity: HomeEntity = {
        Framework_level_2: Framework_level_2
    };





    const [front_language1, setLanguage1] = useState<DocumentData>([]);



    useEffect(() => {


        const usersCollectionRef1 = doc(db, 'front_framework', 'level_2');
        getDoc(usersCollectionRef1).then((documentSnapshot) => {
            if (documentSnapshot.exists()) {
                // setLanguage2(documentSnapshot.data());
                //console.log('Document data1:', documentSnapshot.get('content'));
                const array = documentSnapshot.data()['content'];
                //console.log('配列サイズ→', array.length);
                for (let i: number = 0; i < array.length; i++) {
                    //console.log('Document data2:', documentSnapshot.get('content')[i]);
                    setLanguage1(documentSnapshot.get('content'));

                }


            } else {
                console.log('No such document!');
            }
        });




    }, []);
    return (
        <ul>
            {front_language1.map((content: any, index: any) => (
                <Flex direction="column">
                    <Checkbox value={content} onChange={check_level_1}>{content}</Checkbox>
                </Flex>
            ))}
        </ul>

    )
}

export default Firebase_framework_level2;