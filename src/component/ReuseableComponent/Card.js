import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import GitHubIcon from '@material-ui/icons/GitHub';
import Image from "../../asset/Weather forecast hourly graphic.svg"

const useStyles = makeStyles({
    card: {
        maxWidth: 250,
    },
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
                    <Typography color="primary" gutterBottom variant="h5" component="h2">
                        Weather Graph
          </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                        <Typography gutterBottom variant="subtitle2" color="primary" component="span">Powered by: </Typography> RereactJS <br />
                        <Typography gutterBottom variant="subtitle2" color="primary" component="span">Component: </Typography> Material-UI<br />
                        <Typography gutterBottom variant="subtitle2" color="primary" component="span">API: </Typography> Openweathermap<br />
                        <Typography gutterBottom variant="subtitle2" color="primary" component="span">Graph: </Typography> Recharts <br />
                        <Typography gutterBottom variant="subtitle2" color="primary" component="span">Designed: </Typography>  Evergreen George<br />
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    <FavoriteIcon />
                </Button>
                <Button size="small" color="primary">
                    <ShareIcon />
                </Button>
                <Button size="small" color="primary">
                    <GitHubIcon />
                </Button>
            </CardActions>
        </Card>
    );
}


export default ImgMediaCard;
