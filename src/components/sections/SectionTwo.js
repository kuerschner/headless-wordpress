import React from "react";
import {
    Grid,
    makeStyles,
    createStyles,
    Container
} from "@material-ui/core";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        backgroundColor: "#fff",
        paddingBottom: theme.spacing(6)
    },
    section: {
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(10),
    },
    desktopVideo: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            display: "flex",
            paddingTop: theme.spacing(3),
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingBottom: theme.spacing(10),
        },
    },
    mobileVideo: {
        [theme.breakpoints.down("md")]: {
            display: "flex",
            paddingTop: theme.spacing(3),
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingBottom: theme.spacing(10),
        },
        [theme.breakpoints.up("md")]: {
            display: "none"
        },
    },
    innerContainer: {
        borderBottom: "1px solid #eee"
    },
    videoSection: {
        backgroundColor: "#ccc",
        height: "500px"
    },
    sectionText: {
        color: "#888888"
    },
    launchSection: {
        textAlign: "center",
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    launchText: {
        fontSize: "3rem",
        color: "#001743",
        fontWeight: "500"
    }
}));

const SectionTwo = props => {
    const classes = useStyles();

    return (
        <Container id="section2" className={classes.root}>
            <Grid container spacing={0} className={classes.innerContainer}>
                <Grid className={classes.launchSection} item xs={12}>
                    <h2 className={classes.launchText}>Launching 2020</h2>
                </Grid>
                <Grid item md={8} sm={12} xs={12} className={classes.desktopVideo}>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/HnpkTbajT9E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
                <Grid className={classes.section} item md={4} sm={12} xs={12}>
                    <Fade right>
                        <h2>Modern Medicine for the Modern Man&trade;</h2>
                        <p className={classes.sectionText}>The confluence of technology and medicine now enables us to live better lives even if our lives are busy. Testosterone deficiency comes with many negative side effects but telemedicine can make treatment convenient for men who have many responsibilities. Our Medical Director, Dr. Gayle Frazzetta, has passionately provided men’s healthcare for years and brings an expert physician’s eye to everything we do at Trūman. Hear her take on why it’s time for online TRT.</p>
                    </Fade>
                </Grid>
                <Grid item md={8} sm={12} xs={12} className={classes.mobileVideo}>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/HnpkTbajT9E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SectionTwo;