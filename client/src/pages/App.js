import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import axios from 'axios'

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';


import withRoot from '../withRoot';
import SlideItem from '../components/slide-item'
import Carousel from '../components/feature-carousel'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Index extends React.Component {
  state = {
    open: false,
    featureList: [],
    children: [],
    activeItemIndex: 0,
  };

  async componentDidMount() {
    const featureShows = await axios.get('https://api.themoviedb.org/3/tv/46648/recommendations?api_key=f8619d56f06b43eb341fd3d7340727fb&language=en-US&page=1')
    console.log(featureShows.data.results)
    this.setState({
      featureList: featureShows.data.results
    })
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  };
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
  
  render() {
    const { classes } = this.props;
    const { open, activeItemIndex, featureList } = this.state;
  

    const feature = featureList.map((series, i) => {
      return (
        <SlideItem
          key={i}
          header={series.name}
          image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${series.poster_path}`}
          // body={series.overview}
        />)
    })

    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Deep Dive
          </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Toolbar>
          </AppBar>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={8} md={8} lg={12}>
              <br></br>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Carousel
              children={feature}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={() => this.setState({ activeItemIndex })}
              />
            </Grid>
          </Grid>

        </div>
      </Router>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));

