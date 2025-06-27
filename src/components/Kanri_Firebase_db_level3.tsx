import { useState, useEffect } from 'react';
import { db } from './FirebaseConfig';
import { addDoc, collection, doc, FieldValue, onSnapshot, setDoc, arrayUnion, updateDoc, getDoc, DocumentData, arrayRemove } from 'firebase/firestore';
import firestore from 'firebase/app';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

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



function Kanri_Firebase_db_level3() {
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value);
    const [input3, setInput3] = useState('')
    const handleInputChange3 = (e: any) => setInput3(e.target.value)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const userDocumentRef3 = doc(db, 'front_language', 'level_3');
        if (input3 === "") {
        } else {
            await updateDoc(userDocumentRef3,
                { content: arrayUnion(input3) });
        }
        window.location.reload();

    };

    //削除実装
    const deleteUser = async (name: any) => {
        console.log('NAME', name)
        const userDocumentRef3 = doc(db, 'front_language', 'level_3');

        //ループ処理
        for (let i = 0; i < level_3.length; i++) {
            console.log(level_3[i]);
            await updateDoc(userDocumentRef3,
                { content: arrayRemove(level_3[i]) });
        }
        window.location.reload();
    };

    //削除＆追加
    const changeUser = async (name: any) => {
        console.log('NAME', name)
        const userDocumentRef1 = doc(db, 'front_language', 'level_3');

        //ループ処理
        for (let i = 0; i < level_3.length; i++) {
            console.log(level_3[i]);
            await updateDoc(userDocumentRef1,
                { content: arrayRemove(level_3[i]) });
        }

        // if (selectedOption == 'front_lang_level3') {
        console.log('選んだ選択肢は', selectedOption);
        console.log('変更する項目名は', level_3);

        const ref = doc(db, 'front_language', selectedOption);
        if (level_3 === "") {
        } else {
            for (let i = 0; i < level_3.length; i++) {
                await updateDoc(ref,
                    { content: arrayUnion(level_3[i]) });
            }
        }
        // }
    };
    const [front_language3, setLanguage3] = useState<DocumentData>([]);
    const [level_3, set_level_3_Form] = useState<any>([]);
    const check_level_3 = (event: any) => {

        if (level_3.includes(event.target.value)) {
            set_level_3_Form(level_3.filter((checkedValue: any) => checkedValue !== event.target.value));
            console.log('[Include]チェックボックスChecked個数', level_3);
        } else {
            level_3.push(event.target.value);
            set_level_3_Form(level_3);
            console.log('NO_INCLUDE', event.target.value);
            console.log('[No_Include]チェックボックスChecked個数', level_3);

        }

    };
    useEffect(() => {
    }, []);

    useEffect(() => {


        const usersCollectionRef3 = doc(db, 'front_language', 'level_3');
        getDoc(usersCollectionRef3).then((documentSnapshot) => {
            if (documentSnapshot.exists()) {
                // setLanguage2(documentSnapshot.data());
                //console.log('Document data1:', documentSnapshot.get('content'));
                const array = documentSnapshot.data()['content'];
                //console.log('配列サイズ→', array.length);
                for (let i: number = 0; i < array.length; i++) {
                    //console.log('Document data2:', documentSnapshot.get('content')[i]);
                    setLanguage3(documentSnapshot.get('content'));

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
                        id='level_3' value={input3} onChange={handleInputChange3} width='500px' />
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
            <br />
            <br />
            <ul>
                {front_language3.map((content: any, index: any) => (
                    <Flex direction="column">
                        <Checkbox value={content} onChange={check_level_3}>{content}</Checkbox>
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

export default Kanri_Firebase_db_level3;