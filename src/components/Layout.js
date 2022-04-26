import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";
import { ListAlt, RestaurantMenuSharp, RestaurantSharp } from "@material-ui/icons";
import { format } from "date-fns";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { primary, opposite, oppositeLight, secondary } from "../constants/styles";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: "#FFC8B4",
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth,
            background: primary
        },
        drawerPaper: {
            width: drawerWidth,
            background: primary
        },
        root: {
            display: 'flex'
        },
        active: {
            background: secondary,
            // '&:hover': {
            //     background: primary,
            // }
        },
        deactive: {
            background: primary,
            '&:hover': {
                background: "#FFC8B4",
            }
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            background: 'linear-gradient(45deg, #FE688B, #FF8E53)'
        },
        toolbar: theme.mixins.toolbar,
        quote: {
            flexGrow: 1,
            fontSize: 20,
        },
        user: {
            fontSize: 20,
        }
    }
});


const Layout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: '訂單(kitchen)',
            icon: <ListAlt />,
            path: '/'
        },
        {
            text: '訂單(Counter)',
            icon: <RestaurantSharp />,
            path: '/counter'
        },
        {
            text: '改菜單',
            icon: <RestaurantMenuSharp />,
            path: '/modify-menu'
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.quote}>
                        顧客永遠是對的，就算是大爛客也一樣
                    </Typography>
                    <Typography className={classes.user}>
                        ＯＯ餐廳
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" align="center" className={classes.title}>
                        快點
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            onClick={() => history.push(item.path)}
                            key={item.text}
                            className={location.pathname === item.path ? classes.active : classes.deactive}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Layout;