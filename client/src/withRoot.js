import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import lime from '@material-ui/core/colors/lime';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#3e3e3e',
      main: grey[900],
      // dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ffffff',
      main: lime[50],
      // dark: '#c6c8b5',
      contrastText: '#000',
    },
    background: {
      default: '#1e1e1e'
    },
    text: {
      primary: grey[100],
      secondary: '#aaaaaa'
    },
  },
  typography: {
    useNextVariants: true,
    body1: {
      fontWeight: 600,
    },
    h5:{
      fontFamily: 'Pacifico'
    },
    caption:{
      fontSize: '15px'
    }



  },

});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;