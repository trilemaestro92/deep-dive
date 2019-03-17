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
        light: '#484848',
        main: grey[900],
        dark: '#000000',
        contrastText: '#fff',
      },
    secondary: {
        light: '#ffffff',
        main: lime[50],
        dark: '#c6c8b5',
        contrastText: '#000',
      },
      background:{
        default: grey[900]
      },  
  },
  typography: {
    useNextVariants: true,
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