import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import MenuItemCard from "../containers/MenuItemCard";

const ModifyMenu = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <Container>
            <Grid container spacing={3}>
                {items.map(item => (
                    <Grid item key={item.id} xs={12} md={6} lg={4}>
                        {/* <Paper>{item.name}</Paper> */}
                        <MenuItemCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ModifyMenu;