import React from "react";
import type { Page } from '../types/page'
import MainLayout from '../components/common/MainLayout'

import Link from "next/link";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Heading, Typography } from "@mui/material";

const HomePage: Page = () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Welcome my testing - Anh Le</h1>
      <div style={{
        display: 'flex', flexDirection: 'row', width: '100%',
        justifyContent: 'space-around', padding: '20px'
      }}>
        <Card style={{ marginTop: '10px' }} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.rakkardigital.com/_nuxt/img/enterprice-guard.fe02d51.svg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Test 1 - Trending Coin
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Complete - 80%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Done Get Trending Coin and Autocomplete 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Done Get Detail Info Coin
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Get Data Price for Chart but not yet complete populate data on Line Chart
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => { window.location.href = '/test1' }}>
              View
            </Button>
          </CardActions>
        </Card>

        <Card style={{ marginTop: '10px' }} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.rakkardigital.com/_nuxt/img/confidence-trust.db33471.svg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Test 2 - Find Max Profit
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Complete - 100%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - Use Jest for Unit test . Have Image Snapshot
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => { window.location.href = '/test2' }}>
              View
            </Button>
          </CardActions>
        </Card>
      </div>

    </Container>
  );
};
export default HomePage;

HomePage.layout = MainLayout
