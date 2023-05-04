import { Page } from "../types/page";
import React from "react";
import MainLayout from '../components/common/MainLayout'
import { Container, Box } from "@material-ui/core";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const itemData = [
    {
        img: '/testmethod.png',
        title: "Test Method",
        author: "Jest Test",
        featured: false,
    },
    {
        img: '/testcase.png',
        title: "Test Case",
        author: "Jest Test",
        featured: false,
    },
    {
        img: '/test2result.png',
        title: "Test Result",
        author: "Jest Test",
        featured: false,
    }
];


function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const test2: Page = () => {
    return (
        <Container>
            <h1>Find Max Profit</h1>
            <ImageList
                sx={{
                    width: 1000,
                    height: 850,
                    transform: 'translateZ(0)',
                }}
                rowHeight={200}
                gap={10}
            >
                {itemData.map((item) => {
                    const cols = item.featured ? 2 : 1;
                    const rows = item.featured ? 2 : 1;

                    return (
                        <ImageListItem key={item.img} cols={cols} rows={rows}>
                            <img
                                {...srcset(item.img, 250, 200, rows, cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                title={item.title}
                                position="top"
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'white' }}
                                        aria-label={`star ${item.title}`}
                                    >
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
        </Container>
    );
};

export default test2;
test2.layout = MainLayout