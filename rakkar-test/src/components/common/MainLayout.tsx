import React, { PropsWithChildren, ReactNode } from "react";
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

const MainLayout = ({ children }: PropsWithChildren<any>) => {
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
