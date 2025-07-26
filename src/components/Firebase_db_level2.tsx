import { useState, useEffect, FC } from 'react';
import { db } from './FirebaseConfig';
import { collection, doc, DocumentData, getDoc, getDocs, getDocsFromServer } from 'firebase/firestore';
import { useTransform } from 'framer-motion';
import { Button, Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AddIcon } from '@chakra-ui/icons';

const Firebase_db_level2 = (props: any) => {
    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1);
    };
    const [DB_level_2, set_DB_level_2_Form] = useState<any>([]);

    const next = () => {
        navigate("/frontEndResult/", { state: entity })
    }


    const check_level_2 = (event: any) => {

        if (DB_level_2.includes(event.target.value)) {
            console.log('YES', event.target.value);
            set_DB_level_2_Form(DB_level_2.filter((checkedValue: any) => checkedValue !== event.target.value))
        } else {
            DB_level_2.push(event.target.value);
            set_DB_level_2_Form(DB_level_2)
            console.log('NO', event.target.value);
            console.log('配列', DB_level_2);

        }
        // チェックされていたらエラーメッセージが表示されない

        props.handleValueChange2(DB_level_2);
    };




    interface HomeEntity {
        DB_level_2: {}
    }

    // const entity: HomeEntity = {
    //     level1: level_1.join(', '),
    //     level2: level_2.join(', '),
    //     level3: level_3.join(', ')
    // };
    const entity: HomeEntity = {
        DB_level_2: DB_level_2
    };

    const [front_language2, setLanguage2] = useState<DocumentData>([]);

    useEffect(() => {


        const usersCollectionRef1 = doc(db, 'front_language', 'level_2');
        getDoc(usersCollectionRef1).then((documentSnapshot) => {
            if (documentSnapshot.exists()) {
                // setLanguage2(documentSnapshot.data());
                //console.log('Document data1:', documentSnapshot.get('content'));
                const array = documentSnapshot.data()['content'];
                //console.log('配列サイズ→', array.length);
                for (let i: number = 0; i < array.length; i++) {
                    //console.log('Document data2:', documentSnapshot.get('content')[i]);
                    setLanguage2(documentSnapshot.get('content'));

                }


            } else {
                console.log('No such document!');
            }
        });




    }, []);
    return (
        <ul>
            {front_language2.map((content: any, index: any) => (
                <Flex direction="column">
                    <Checkbox value={content} onChange={check_level_2}>{content}</Checkbox>
                </Flex>
            ))}
        </ul>

    )
}

export default Firebase_db_level2;