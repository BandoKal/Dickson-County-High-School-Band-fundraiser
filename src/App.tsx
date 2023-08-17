import React from 'react';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ProductList from './components/ProductList';
import productsData from './data/products';
import theme from './theme';
import { ReactComponent as Logo } from './assets/buff-logo.svg';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline /> {/* Normalize the CSS */}
      <AppBar position="sticky" style={{ backgroundColor: 'white' }}>
        <Toolbar>
        <Logo style={{ height: 50, marginRight: 16 }} />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
            Dickson County High School Band
            </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography sx={{ paddingTop: '24px' }}>
          <strong>This is the County High School Marching Band Fundraiser 🥁. 25% of all sales will go to the County High School Band! Thank you for the support! Go Bullfrogs! </strong>
        </Typography>
        <Typography sx={{ paddingTop: '24px' }}>
          Please Venmo your order to @msbanddirector with the order in the comment. Thanks you rock! 🤘 
          <strong>This fundraiser ends 2023-10-15</strong>
        </Typography>
      </Container>
      <Container sx={{ paddingTop: '24px' }}>
        <ProductList products={productsData} />
      </Container>
    </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
