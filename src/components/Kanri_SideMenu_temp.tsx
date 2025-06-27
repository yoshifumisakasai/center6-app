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

export const Kanri_SideMenu_temp = () => {
    // natigate関数を取得
    const navigate = useNavigate();
    const sideMenuItems = [
        {
            name: "Language",
            path: "/kanri_dashboard/",
            icon: MdDashboard
        },
        {
            name: "State Libray",
            path: "/kanri_state/",
            icon: MdAccountBox

        },
        {
            name: "framework",
            path: "/kanri_framework/",
            icon: MdEmail

        },
        {
            name: "CSS Library",
            path: "/kanri_css_library/",
            icon: MdMessage
        },
        {
            name: "hook",
            path: "/kanri_hook/",
            icon: MdInsertChart
        },
        {
            name: "Test Case",
            path: "/kanri_ratereview/",
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

export default Kanri_SideMenu_temp;