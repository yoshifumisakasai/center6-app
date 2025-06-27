import { Flex, Image } from "@chakra-ui/react";

export const TopHeader = () => (
    <Flex
        as="header"
        position="fixed"
        bg="pink.100"
        top={0}
        width="full"
        height="100px"
        shadow="sm"
        py={4}
        px={8}
    >
        <Image src="/test.PNG" />
    </Flex>
);