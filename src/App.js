import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import './App.css';

function App() {
  return (
      <Layout>
        <BurgerBuilder />
      </Layout>
  );
}

export default App;
