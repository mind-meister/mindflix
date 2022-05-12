import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  

  return (
    <>
      <AuthContextProvider>
      <Navbar />
      <Switch>
        
        <Route path={'/'} exact>
          <Home />
        </Route>

        <Route path={'/login'} exact>
          <Login />
        </Route>

        <Route path={'/signup'} exact>
          <SignUp />
        </Route>

        <Route path={'/account'} exact>
          <ProtectedRoute>
          <Account />
          </ProtectedRoute>
        </Route>

      </Switch>
      </AuthContextProvider>
    </>
  )

}

export default App;
