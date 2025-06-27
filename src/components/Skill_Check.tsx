import { Button, Container, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { TodoTitle } from "./TodoTitle";
import './Skill_Check.css';
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { TopHeader } from "./TopHeader";
import SideMenu_top from "./SideMenu_top";
interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    { value: 'フロントエンド', label: 'フロントエンド' },
    { value: 'バックエンド', label: 'バックエンド' },
    { value: 'インフラ', label: 'インフラ' },
];

const Skill_Check: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>(options[0].value);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };
    const navigate = useNavigate();
    const frontEnd = async () => {
        navigate("/frontEnd/");
    }
    let goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
        
            <Flex>
                <SideMenu_top />
                <Flex direction="column">
                    <div className="select-container">
                        <select value={selectedOption} onChange={handleChange}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <br />
                    <p>選択された技術領域: {selectedOption}</p>
                    <Button
                        onClick={frontEnd}
                        colorScheme="blue"
                        leftIcon={<AddIcon />}
                        mt="8">スキル入力へ
                    </Button>
                    <Button
                        onClick={goBack}
                        colorScheme="blue"
                        variant="outline"
                        size="sm"
                        leftIcon={<AddIcon />}
                        mt="8">戻る
                    </Button>
                </Flex>
            </Flex>
            </Container>
        </>
    );
};
export default Skill_Check;