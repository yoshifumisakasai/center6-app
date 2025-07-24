import { useState, useEffect, useRef } from 'react';
import { db } from './FirebaseConfig';
import { addDoc, collection, doc, FieldValue, onSnapshot, setDoc, arrayUnion, updateDoc, getDoc, DocumentData, deleteDoc, getDocs, query, where, arrayRemove, DocumentSnapshot } from 'firebase/firestore';
import firestore from 'firebase/app';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    { value: 'level_1', label: '言語 レベル1' },
    { value: 'level_2', label: '言語 レベル2' },
    { value: 'level_3', label: '言語 レベル3' },
];

type formInputs = {
    name: string;
}


function Kanri_Firebase_testCase_level3() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const [selectedOption, setSelectedOption] = useState<string>(options[0].value);
    const [input1, setInput1] = useState('')
    const handleInputChange1 = (e: any) => setInput1(e.target.value)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        setInput1(event.target.value)
        event.preventDefault();
        const userDocumentRef1 = doc(db, 'kanri_test_case', 'level_3');
        if (input1 === "") {
        } else {
            await updateDoc(userDocumentRef1,
                { content: arrayUnion(input1) });
        }

        //Firebase追加後、再レンダリング実行
        //useState(setLanguage1)の値変更
        const usersCollectionRef1 = doc(db, 'kanri_test_case', 'level_3');
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
    };

    //削除実装
    const deleteUser = async (name: any) => {
        console.log('NAME', name)
        const userDocumentRef1 = doc(db, 'kanri_test_case', 'level_3');

        //ループ処理
        for (let i = 0; i < level_1.length; i++) {
            console.log(level_1[i]);
            await updateDoc(userDocumentRef1,
                { content: arrayRemove(level_1[i]) });
        }

        //Firebase削除後、再レンダリング実行
        //useState(setLanguage1)の値変更
        const usersCollectionRef1 = doc(db, 'kanri_test_case', 'level_3');
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
    };

    //削除＆追加
    const changeUser = async (name: any) => {
        console.log('NAME', name)
        const userDocumentRef1 = doc(db, 'kanri_test_case', 'level_3');

        //ループ処理
        for (let i = 0; i < level_1.length; i++) {
            console.log(level_1[i]);
            await updateDoc(userDocumentRef1,
                { content: arrayRemove(level_1[i]) });
        }

        // if (selectedOption == 'front_lang_level3') {
        console.log('選んだ選択肢は', selectedOption);
        console.log('変更する項目名は', level_1);

        const ref = doc(db, 'front_state', selectedOption);
        if (level_1 === "") {
        } else {
            for (let i = 0; i < level_1.length; i++) {
                await updateDoc(ref,
                    { content: arrayUnion(level_1[i]) });
            }
        }

        //Firebase変更（削除→追加）後、再レンダリング実行
        //useState(setLanguage1)の値変更
        const usersCollectionRef1 = doc(db, 'kanri_test_case', 'level_3');
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





        // }
    };
    const [front_language1, setLanguage1] = useState<DocumentData>([]);
    const [level_1, set_level_1_Form] = useState<any>([]);
    const check_level_1 = (event: any) => {

        if (level_1.includes(event.target.value)) {
            set_level_1_Form(level_1.filter((checkedValue: any) => checkedValue !== event.target.value));
            console.log('[Include]チェックボックスChecked個数', level_1);
        } else {
            level_1.push(event.target.value);
            set_level_1_Form(level_1);
            console.log('NO_INCLUDE', event.target.value);
            console.log('[No_Include]チェックボックスChecked個数', level_1);

        }

    };

    const ref = useRef<HTMLInputElement>(null);

    function handleRef() {
        console.log(ref);
        console.log("input", ref.current);
        console.log("value", ref.current?.value);
        console.log("width", ref.current?.offsetWidth);
    };


    useEffect(() => {


        const usersCollectionRef1 = doc(db, 'kanri_test_case', 'level_3');
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

        //「追加」と「削除」ボタン押下時は、再レンダリングさせる
        //this.forceUpdate()

    }, []);
    return (

        <Box m={4}>
            <form onSubmit={handleSubmit}>
                {/* 名前 */}
                <FormControl mb={5}>
                    <FormLabel htmlFor='level_3'>level-3</FormLabel>
                    <Input
                        id='level_1' value={input1} onChange={handleInputChange1} width='500px' />
                    <Input type="text" ref={ref}></Input>
                    <Button onClick={handleRef}>useRef</Button>
                </FormControl>
                <Button
                    type='submit'
                    colorScheme="pink"
                    variant="outline"
                    size="sm"
                    leftIcon={<AddIcon />}
                    mt="8">追加
                </Button>
            </form>
            {/* 再レンダリング */}

            {/* 
            {front_language1.map((content: any, index: any) => (
                <p>{content}</p>
            ))}
            */}
            <br />
            <br />
            <p>登録一覧</p>
            <ul>
                {front_language1.map((content: any, index: any) => (
                    <Flex direction="column">
                        <Checkbox value={content} onChange={check_level_1}>{content}</Checkbox>
                    </Flex>
                ))}
            </ul>
            <br />

            <Button colorScheme="green" size="sm" variant="outline" leftIcon={<AddIcon />} onClick={() => deleteUser('dummy')}>削除</Button>
            <Button colorScheme="blue" size="sm" variant="outline" leftIcon={<AddIcon />} onClick={() => changeUser('dummy')}>変更</Button>
            <select value={selectedOption} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Box>
    );
}

export default Kanri_Firebase_testCase_level3;