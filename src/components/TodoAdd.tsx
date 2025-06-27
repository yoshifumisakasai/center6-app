import { RefObject } from "react";
import { Textarea, Button  } from "@chakra-ui/react";

//TodoAddコンポーネント定義
export const TodoAdd = ({ placeholder, leftIcon, buttonText, inputEl, handleAddTodoListItem }:
    { placeholder: string; leftIcon: any, buttonText: string; inputEl: RefObject<HTMLTextAreaElement>; handleAddTodoListItem: () => void }) => {
    return (
        <>
            <Textarea
                placeholder={placeholder}
                bgColor="white"
                mt="8"
                borderColor="gray.400"
                ref={inputEl}
            />

            <Button
                onClick={handleAddTodoListItem}
                colorScheme="blue"
                leftIcon={leftIcon}
                mt="8">{buttonText}
            </Button>
        </>
    )
}