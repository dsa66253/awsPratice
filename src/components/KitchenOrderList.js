import KitchenItemCard from "../containers/KitchenItemCard";
import { Card, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    infoCard: {
        minHeight: '15%',
        minWidth: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
});


const KitchenOrderList = ({ order }) => {

    const classes = useStyles();

    return (
        <Grid container direction="row">
            {/* 
            <div className={classes.infoCard}>
                {order.id} /
            </div>
            <div className={classes.infoCard}>
                {order.tableNo} 桌
            </div> */}
            {order.items.map(item => (
                <KitchenItemCard key={item.id} item={item} />
            ))}

        </Grid>
    );
}

export default KitchenOrderList;