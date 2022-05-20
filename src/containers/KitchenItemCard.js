import { Grid, Card, CardHeader, IconButton, CardContent, Typography, makeStyles, ListItemSecondaryAction, Divider } from "@material-ui/core";
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
        background: 'rgba(0,0,0,0.05)',
        borderLeft: '10px solid rgba(248, 32, 34, 0.59)',
        // background: "",
        // borderColor: "rgba(0,0,0,0.1)",
        // border: '2px solid',
        color: "rgba(0,0,0,0.7)"
    },
    running: {
        display: 'block',
        width: '15vw',
        background: 'rgba(0,0,0,0.05)',
        borderLeft: '10px solid rgba(245, 249, 0, 0.54)',
        // background: 'rgba(245, 249, 0, 0.54)',
        // borderColor: "rgba(0,0,0,0.1)",
        // border: '2px solid',
        color: "rgba(0,0,0,0.5)"
    },
    done: {
        display: 'block',
        width: '15vw',
        background: 'rgba(0,0,0,0.05)',
        borderLeft: '10px solid rgba(19,236,28,0.19)',
        // border: '2px solid',
        // borderColor: "rgba(0,0,0,0.1)",
        color: "rgba(0,0,0,0.3)"
    },
    header: {
        fontSize: 10
    },
    content: {
        background: '#FFFFFF',
        margin: 5,
    },
    divider: {
        marginLeft: "10px",
        marginRight: "10px",
        padding: "0.5px"
    },
});

const KitchenItemCard = ({ item }) => {


    // const [status, setStatus] = useState(item.status);
    const [status, setStatus] = useState('RAW');
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


    var quantity = 0;
    var note = "無";
    if (item.orderItemInfo) {
        quantity = item.orderItemInfo.quantity;
        note = item.orderItemInfo.note;
    }


    return (

        <Card className={cardClassName} onClick={updateStatus}>
            <CardHeader titleTypographyProps={{ variant: 'h6' }} title={`${item.name} * ${quantity}`}></CardHeader>
            <Divider className={classes.divider} />
            <CardContent >{note}</CardContent>
        </Card>
    );
}

export default KitchenItemCard;