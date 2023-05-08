import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Secondary from './components/Secondary';
import Item from './components/Item';
import { useData } from './hooks/useData';

const App = () => {
  const { data, setData } = useData();
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          {() => <Item data={data} setData={setData} />}
        </Route>
        <Route exact path="/secondary">
          {() => <Secondary data={data} setData={setData} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
