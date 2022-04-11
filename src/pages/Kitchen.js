import { useQuery } from "@apollo/client";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from 'react';
import KitchenOrderList from "../components/KitchenOrderList";
import { SUBSCRIPTION_ORDER } from "../graphql";
import { QUERY_ORDERS } from "../graphql/queries";


const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        // backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue'
        }
    },
    title: {
        textDecoration: 'underline',
        margin: 20
    }
});


const Kitchen = () => {
    const classes = useStyles();
    const { loading, error, data, subscribeToMore } = useQuery(QUERY_ORDERS);

    useEffect(() => {
        try {
            subscribeToMore({
                document: SUBSCRIPTION_ORDER,
                updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    const newOrder = subscriptionData.data;

                    console.log(newOrder);
                    console.log(prev.queryOrders);

                    return {
                        ...prev,
                        queryOrders: [newOrder, ...prev.queryOrders],
                    };
                },
            });
        } catch (e) {
            console.log(e);
        }
    }, [subscribeToMore]);

    return (
        <Container>
            <Grid container spacing={3} direction="column-reverse">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error ^U^</p>
                ) : (
                    data.queryOrders.map(order =>
                        <Grid item>
                            <KitchenOrderList order={order} />
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
    );
}

export default Kitchen;