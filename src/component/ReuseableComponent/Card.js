import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Image from "../../asset/evergreen.jpg"

const useStyles = makeStyles({
    card: {
        maxWidth: 250,
        "box-shadow": "none"
    },
    icon: {
        display: "center",
        justifyContent: "center"
    }
});

const ImgMediaCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"

                    image={Image}
                    title="Contemplative Reptile"
                />

                <CardContent>
                    <Typography color="primary" align="center" gutterBottom variant="h5" component="h2">
                        Weather Graph
                    </Typography>
                    <Typography variant="subtitle2" color="primary" component="p" align="center" >
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" component="span">Designed by </Typography> <br />
                        Evergreen George
                    </Typography>
                </CardContent>

            </CardActionArea>

            <CardActions className={classes.icon} >
                <Button size="small" rel="noopener noreferrer" href="https://github.com/georgeevergreen0" target="_blank" color="primary">
                    <GitHubIcon />
                </Button>
                <Button size="small" rel="noopener noreferrer" href="https://twitter.com/georgeevergreen" target="_blank" color="primary">
                    <InstagramIcon />
                </Button>
                <Button size="small" rel="noopener noreferrer" href="https://instagram.com/georgeevergreen" target="_blank" color="primary">
                    <TwitterIcon />
                </Button>
            </CardActions>
        </Card>
    );
}


export default ImgMediaCard;
