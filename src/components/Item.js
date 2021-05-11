  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import './Item.css'
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      marginBlockEnd: 20,
      marginInlineStart: 30,
      marginRight: 30,
      border: '1px solid',
      padding: 10,
      boxShadow: '4px 8px #000080'
    },
    media: {
      height: 300,
      width: '20rem'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
    }));

export const Item = ({ item }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
    <Link to={`/item/${item.id}`}>
    <Card className={classes.root}>
    <CardHeader 
    title={item.title}
    subheader={`$${item.price}`}/>
     <img src={item.pictureUrl} alt="" className={classes.media} />
     <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {item.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Link>
  );
};

export default Item;