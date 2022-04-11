import { Grid, Card, CardHeader, IconButton, CardContent, Typography, makeStyles, ListItemSecondaryAction } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { opposite, primary, secondary } from "../constants/styles";
import { nextStatus, statusToColor } from "../utils/transfer";

const useStyles = makeStyles({
    status: {
        // border: (item) => {
        //     if (item.price > 50) {
        //         return '2px solid black';
        //     }
        // },
        backgroundColor: (item) => {
            return statusToColor[item.status];
        }
        // color: opposite
    }
});

const KitchenItemCard = ({ item }) => {


    // const [status, setStatus] = useState(item.status);
    const [status, setStatus] = useState(item.status);
    const classes = useStyles(item);

    const updateStatus = async (sequential) => {
        // TODO: api connect
        // await 
        setStatus(nextStatus(status, sequential));
    }


    return (
        <Card className={classes.status}>
            <CardHeader
                action={
                    <IconButton onClick={() => updateStatus(false)}>
                        <ArrowBack />
                    </IconButton>
                }
                title={`${item.name} * ${item.quantity}`}
            />
            <CardContent onClick={() => updateStatus(true)}>
                {item.note}
            </CardContent>
        </Card>
    );
}

export default KitchenItemCard;