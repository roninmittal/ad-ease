import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Chip } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 150,
      backgroundSize: 'contain'
    },
    avatar: {
      backgroundColor: red[500],
    },
}));

export default function ProductCard({productCard, status}) {
    const {
        mainHeadline,
        headline,
        primary_text,
        product_image,
    } = productCard;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <Typography variant="subtitle1">{mainHeadline}</Typography>
                }
            />
            <CardMedia
                className={classes.media}
                image={product_image}
                title={mainHeadline}
            />
            <CardContent>
                <Typography variant="subtitle2">
                    {headline}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {primary_text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label="linkedin">
                    <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Box ml={"auto"}>
                    <Chip color={status==="INACTIVE" ? "secondary" : "primary"} size="small" label={status}/>
                </Box>
            </CardActions>
        </Card>
    );
}