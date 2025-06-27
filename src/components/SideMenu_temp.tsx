import { Box, Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
    MdMessage,
    MdDashboard,
    MdEmail,
    MdAccountBox,
    MdInsertChart,
    MdWbSunny,
    MdRateReview,
} from "react-icons/md";

export const SideMenu_temp = () => {
    // natigate関数を取得
    const navigate = useNavigate();
    const sideMenuItems = [
        {
            name: "Language",
            path: "/dashboard/",
            icon: MdDashboard
        },
        {
            name: "State Libray",
            path: "/state/",
            icon: MdAccountBox

        },
        {
            name: "framework",
            path: "/framework/",
            icon: MdEmail

        },
        {
            name: "CSS Library",
            path: "/css_library/",
            icon: MdMessage
        },
        {
            name: "hook",
            path: "/hook/",
            icon: MdInsertChart
        },
        {
            name: "Test Case",
            path: "/ratereview/",
            icon: MdRateReview
        },
    ];
    return (
        <Box w="20vw" m="20px">
            {sideMenuItems.map((item) => (
                <label>
                    <Box mt="10px" ml="10px">
                        <Button variant="ghost" onClick={() => navigate(item.path)}>
                        {/* <Icon as={item.icon} w={4} h={4} /> */}
                            {item.name}
                        </Button>
                    </Box>
                </label>
            ))}
        </Box>
    );
};

export default SideMenu_temp;