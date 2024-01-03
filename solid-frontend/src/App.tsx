import { Route, Router } from '@solidjs/router';

import './App.css'
import { Home } from './pages/Home';
import { Auth } from "./pages/Auth";
import { Dashboard } from './pages/Dashboard';
import { Protected } from './pages/Protected';

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/protected" component={Protected} />
      </Router>
    </>
  )
}

export default App
