import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import {NavigationPanel} from "./Navigation";

export  default function  Dashboard  () {
    return(
        <Box >
        <NavigationPanel/>
        <Outlet />
        </Box>
    )
}