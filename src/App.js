import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Layout from "./component/Layout/Layout.js";
import Main from "./component/main/main";




function App(props) {

  return (
    <>
      <CssBaseline />
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export default App;
