import { Grid, Card, CardHeader, IconButton, CardContent, Typography, makeStyles, ListItemSecondaryAction } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { opposite, primary, secondary } from "../constants/styles";
import { nextStatus, statusToColor } from "../utils/transfer";

const useStyles = makeStyles({
    default: {
        display: 'block',
        width: '15vw',
        background: opposite,
    },
    raw: {
        display: 'block',
        width: '15vw',
        background: '#FF5151',
    },
    running: {
        display: 'block',
        width: '15vw',
        background: '#FFE66F',
    },
    done: {
        display: 'block',
        width: '15vw',
        background: '#02C874',
    },
    header: {
        fontSize: 20
    },
    content: {
        background: '#FFFFFF',
        margin: 5,
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
        cardClassName = statusToStyles(status);
    }

    const statusToStyles = () => {
        if (status === "RAW") return classes.raw;
        if (status === "RUNNING") return classes.running;
        if (status === "DONE") return classes.done;
        return classes.default;
    }
    let cardClassName = statusToStyles(status);


    return (

        <Card className={cardClassName} onClick={updateStatus}>
            <CardHeader title={`${item.name} * ${item.quantity}`}></CardHeader>
            <CardContent className={classes.content}>{item.note ?? "無"}</CardContent>
        </Card>
    );
}

export default KitchenItemCard;