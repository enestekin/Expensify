import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicPage';

export const history = createHistory();

function App() {
  
  return (
    <Router history={history}>
      <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
      </div>
    </Router>
  );
}
export default App;