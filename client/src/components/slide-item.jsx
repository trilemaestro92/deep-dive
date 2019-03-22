import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
    backgroundColor:'#282828',
    boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)'
  },
  media: {
    height: 290,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  textBody:{
      backgroundColor: '#282828'
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        {/* <CardContent className={classes.textBody} >
          <Typography gutterBottom variant='body1' color='secondary'  component="h2" align='left'>
            {props.header}
          </Typography>
          <Typography variant='subtitle2' color='textSecondary' component="p">
            {props.desc}  •  {props.desc2} ratings
          </Typography>
        </CardContent> */}
      </CardActionArea>
      {/* <CardActions className={classes.textBody}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);