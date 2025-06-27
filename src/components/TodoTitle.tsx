import { FC } from "react";
import { memo } from "react";
import { Title_comp } from "../types";
import { Heading } from "@chakra-ui/react";

//TodoTitleコンポーネント定義
export const TodoTitle: FC<Title_comp> = memo(({ title, as, fontSize, mt }) => {
    return (
        <Heading mt={mt} as={as} fontSize={fontSize} w="full">{title}</Heading>
    )
});