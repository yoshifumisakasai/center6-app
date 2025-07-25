import { useState, useEffect, FC } from 'react';
import { db } from './FirebaseConfig';
import { collection, doc, DocumentData, getDoc, getDocs, getDocsFromServer } from 'firebase/firestore';
import { useTransform } from 'framer-motion';
import { Button, Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';

const Firebase_state_level3 = (props: any) => {

    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1);
    };
    const [state_level_3, set_State_level_3_Form] = useState<any>([]);


    const next = () => {
        navigate("/frontEndResult/", { state: entity })
    }
    const check_level_1 = (event: any) => {

        // console.log('event.target.valueの中身は',event.target.value)
        //下記値は、インデックス番号
        if (state_level_3.includes(event.target.value)) {
            set_State_level_3_Form(state_level_3.filter((checkedValue: any) => checkedValue !== event.target.value));
            // console.log('[Include]チェックボックスChecked個数', level_1);
        } else {
            state_level_3.push(event.target.value);
            set_State_level_3_Form(state_level_3);
            // console.log('NO_INCLUDE',event.target.value);
            // console.log('[No_Include]チェックボックスChecked個数', level_1);

        }
        // チェックされていたらエラーメッセージが表示されない

        props.handleValueChange1(state_level_3);
        // console.log('Checked個数', level_1);
    };


    interface HomeEntity {
        state_level_3: {}
    }

    // const entity: HomeEntity = {
    //     level1: level_1.join(', '),
    //     level2: level_2.join(', '),
    //     level3: level_3.join(', ')
    // };
    const entity: HomeEntity = {
        state_level_3: state_level_3
    };





    const [front_language1, setLanguage1] = useState<DocumentData>([]);



    useEffect(() => {


        const usersCollectionRef1 = doc(db, 'front_state', 'level_3');
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

export default Firebase_state_level3;