import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core";
import section3bg from "../../images/section3bg.jpg";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        minHeight: "800px",
        background: `url(${section3bg}) no-repeat center center`,
        backgroundSize: "cover",
    }
}));

const SectionThree = props => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} justify="center">
            <Grid item xs={12} className={classes.root}>
            </Grid>
        </Grid>
    )
}

export default SectionThree;