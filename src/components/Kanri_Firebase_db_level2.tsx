import { useState, useEffect } from 'react';
import { db } from './FirebaseConfig';
import { addDoc, collection, doc, FieldValue, onSnapshot, setDoc, arrayUnion, updateDoc, getDoc, arrayRemove, DocumentData } from 'firebase/firestore';
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



function Kanri_Firebase_db_level2() {
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value);
    const [input2, setInput2] = useState('')
    const handleInputChange2 = (e: any) => setInput2(e.target.value)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const userDocumentRef2 = doc(db, 'front_language', 'level_2');
        if (input2 === "") {
        } else {
            await updateDoc(userDocumentRef2,
                { content: arrayUnion(input2) });
        }
        window.location.reload();

    };

    //削除実装
    const deleteUser = async (name: any) => {
        console.log('NAME', name)
        const userDocumentRef2 = doc(db, 'front_language', 'level_2');

        //ループ処理
        for (let i = 0; i < level_2.length; i++) {
            console.log(level_2[i]);
            await updateDoc(userDocumentRef2,
                { content: arrayRemove(level_2[i]) });
        }
        window.location.reload();
    };

    //削除＆追加
    const changeUser = async (name: any) => {
        console.log('NAME', name)
        const userDocumentRef1 = doc(db, 'front_language', 'level_2');

        //ループ処理
        for (let i = 0; i < level_2.length; i++) {
            console.log(level_2[i]);
            await updateDoc(userDocumentRef1,
                { content: arrayRemove(level_2[i]) });
        }

        // if (selectedOption == 'front_lang_level3') {
        console.log('選んだ選択肢は', selectedOption);
        console.log('変更する項目名は', level_2);

        const ref = doc(db, 'front_language', selectedOption);
        if (level_2 === "") {
        } else {
            for (let i = 0; i < level_2.length; i++) {
                await updateDoc(ref,
                    { content: arrayUnion(level_2[i]) });
            }
        }
        // }
    };
    const [front_language2, setLanguage2] = useState<DocumentData>([]);
    const [level_2, set_level_2_Form] = useState<any>([]);
    const check_level_2 = (event: any) => {

        if (level_2.includes(event.target.value)) {
            set_level_2_Form(level_2.filter((checkedValue: any) => checkedValue !== event.target.value));
            console.log('[Include]チェックボックスChecked個数', level_2);
        } else {
            level_2.push(event.target.value);
            set_level_2_Form(level_2);
            console.log('NO_INCLUDE', event.target.value);
            console.log('[No_Include]チェックボックスChecked個数', level_2);

        }

    };

    useEffect(() => {


        const usersCollectionRef2 = doc(db, 'front_language', 'level_2');
        getDoc(usersCollectionRef2).then((documentSnapshot) => {
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

        //「追加」と「削除」ボタン押下時は、再レンダリングさせる
        //this.forceUpdate()

    }, []);
    return (
        <Box m={4}>
            <form onSubmit={handleSubmit}>
                {/* 名前 */}
                <FormControl mb={5}>
                    <FormLabel htmlFor='level_2'>level-2</FormLabel>
                    <Input
                        id='level_2' value={input2} onChange={handleInputChange2} width='500px' />
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
                {front_language2.map((content: any, index: any) => (
                    <Flex direction="column">
                        <Checkbox value={content} onChange={check_level_2}>{content}</Checkbox>
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

export default Kanri_Firebase_db_level2;