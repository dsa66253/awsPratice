import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import ImageUpload from "./ImageUpload";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './ModifyMenu.css';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../graphql/queries';
import { CardHeader, IconButton } from '@material-ui/core';
import { MoreHoriz, MoreVert } from '@material-ui/icons';
import ModifyItemCard from '../components/ModifyItemCard';
import AddItemCard from '../components/AddItemCard';

export default function Album() {

  // todo: add data from backend
  const [items, setItems] = useState([]);
  const theme = createTheme();
  const galleryImageList = [];

  useEffect(() => {
    getData();
  }, []);

  const loading = false;
  const error = false;
  const getData = () => {
    fetch('http://localhost:8001/items')
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        setItems(data);
        console.log(data);
      }).catch(() => console.log("error"));
  }

  // const { loading, error, data } = useQuery(QUERY_ITEMS, { variables: { restaurantId: "S001" } });

  // useEffect(() => {
  //   if (data) {
  //     console.log(data.items);
  //     setItems(data.items)
  //   }
  // }, [data]);

  const add = [1]; //新增餐點那格


  if (loading) return <div>Loading...</div>
  if (error) return <div>Error ^U^</div>

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container>
          <Grid container spacing={4}>
            {items.map((item) => (
              <ModifyItemCard key={item.id} item={item} />
            ))}
            <Grid container spacing={4}></Grid>
            {add.map((add) => (
              <AddItemCard />
            ))}

          </Grid>
        </Container>
      </main>

    </ThemeProvider>
  );
}