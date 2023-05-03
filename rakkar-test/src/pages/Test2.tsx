import { Page } from "../types/page";
import React from "react";
import MainLayout from '../components/common/MainLayout'
import { Container, Box } from "@material-ui/core";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const itemData = [
    {
        img: '/testmethod.png',
        title: "Test Method",
        author: "Jest Test"
    },
    {
        img: '/testcase.png',
        title: "Test Case",
        author: "Jest Test"
    },
    {
        img: '/test2result.png',
        title: "Test Result",
        author: "Jest Test"
    }
];

const test2: Page = () => {
    itemData.map((item) => (
        console.log(item.img)
    ));
    return (
        <Container>
            <h1>Find Max Profit</h1>
            <Box sx={{ width: 300, height: 450, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={1} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
};

export default test2;
test2.layout = MainLayout