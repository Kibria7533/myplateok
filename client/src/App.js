
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import me from './views/pages/Me';
import Logout from './views/pages/Logout';
import ProtectedRoute from './ProtectedRoute';
import Adminregister from './views/pages/Adminregister';
import Adminlogin from './views/pages/Adminlogin';
import Superadminlogin from './views/pages/Superadminlogin';
import CheckandActive from './views/pages/CheckandActive';
import RecoverOrActive from './views/pages/RecoverOrActive';
import Checkrecover from './views/pages/Checkrecover';
import Changepassword from './views/pages/Changepassword';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));


const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));



class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/userlogin" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/userregister" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/checkactivationlink" component={CheckandActive} />
              <Route exact path="/recoveroractive" component={RecoverOrActive} />
              <Route exact path="/checkrecover" component={Checkrecover} />
              <Route exact path="/forgotpassword/:token" component={Changepassword} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/" component={me} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/adminregister" component={Adminregister} />
              <Route exact path="/adminlogin" component={Adminlogin} />
              <Route exact path="/Superadminlogin" component={Superadminlogin} />
+             <ProtectedRoute  path="/" name="Home" component={TheLayout} />  
+                 
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
