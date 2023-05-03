import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import {
    createTheme,
    ThemeProvider,
    responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


let darkTheme = createTheme({
    palette: {
        type: "dark",
    },
});
darkTheme = responsiveFontSizes(darkTheme);

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Navbar />
                <main>{children}</main>
            </ThemeProvider>

        </>
    );
};

export default MainLayout;
