import { useMutation } from "@apollo/client";
import { Button, Card, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@material-ui/core";
import { Delete, Edit, MoreVert } from "@material-ui/icons";
import { valueToPercent } from "@mui/base";
import { SaveAs } from "@mui/icons-material";
import { useState } from "react";
import { DELETE_ITEM, UPDATE_ITEM } from "../graphql/mutations";

const ModifyItemCard = ({ item }) => {

    const [isEditMode, setIsEditMode] = useState(false);

    const [deleteItemAPI, { data, loading, error }] = useMutation(DELETE_ITEM);
    const [updateItemAPI, { updateData, updateLoading, updateError }] = useMutation(UPDATE_ITEM);

    const [values, setValues] = useState(
        {
            name: item.name,
            price: item.price,
            img: item.img
        }
    );



    const handleChange = (prop) => (event) => {
        var value = event.target.value;
        if (prop === 'price') value = parseInt(value);
        setValues({ ...values, [prop]: value });
    };

    const handleMode = () => {
        setIsEditMode(!isEditMode);
    }


    const deleteItem = async () => {
        await deleteItemAPI({ variables: { deleteItemId: item.id } });
        window.location.reload();
    }

    const updateItem = async () => {

        if (needUpdate()) {
            await updateItemAPI({ variables: { updateItemId: item.id, data: values } });
            window.location.reload();
        } else {
            handleMode();
        }
    }

    const needUpdate = () => {
        if (values.name !== item.name) return true;
        if (values.price !== item.price) return true;
        if (values.img !== item.img) return true;
        return false;
    }

    if (isEditMode) return (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardHeader action={
                    <IconButton aria-label="settings" onClick={deleteItem}>
                        <Delete />
                    </IconButton>
                }
                    title="店長推薦">

                </CardHeader>
                <CardMedia
                    component="img"
                    image={values.img}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <TextField variant="outlined" onChange={handleChange('name')} value={values.name} label="名稱" />
                </CardContent>
                <CardContent sx={{ flexGrow: 1 }}>
                    <TextField variant="outlined" onChange={handleChange('img')} value={values.img} label="圖片網址" />
                </CardContent>
                <CardContent>
                    <TextField type="number" variant="outlined" onChange={handleChange('price')} value={values.price} label="價格" />
                </CardContent>
                <CardContent>
                    <Button variant="contained" color='secondary' onClick={updateItem}>更新資訊</Button>
                </CardContent>
            </Card>
        </Grid>
    );

    else {
        return (<Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardHeader action={
                    <IconButton aria-label="settings" onClick={handleMode}>
                        <Edit />
                    </IconButton>
                }
                    title="店長推薦">

                </CardHeader>
                <CardMedia
                    component="img"
                    image={item.img}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography>
                        {item.description}
                    </Typography>
                </CardContent>
                <CardContent>
                    $ {item.price}
                </CardContent>
            </Card>
        </Grid>);
    }

}

export default ModifyItemCard;