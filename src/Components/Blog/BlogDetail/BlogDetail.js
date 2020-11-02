import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const BlogDetail = (props) => {
    const {img,title,description,link} = props.blogInfo;
    const classes = useStyles();
    return (
        <div col-md-6>
                   <Card className={classes.root}>
      <CardActionArea>
          <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        /> 
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <a href={link}>     <Button size="small" color="primary">
          Read More
        </Button></a>
      </CardActions>
    </Card>
    </div>
        
    );
};

export default BlogDetail;