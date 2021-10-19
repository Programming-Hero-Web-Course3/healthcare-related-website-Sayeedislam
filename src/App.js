
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contract from './components/Contract/Contract';
import Services from './components/Services/Services'
import Gallary from './components/Gallary/Gallary';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import Singup from './components/Singup/Singup';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';





function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <PrivateRoute path="/contract">
              <Contract />
            </PrivateRoute>

            <Route path="/services">
              <Services />
            </Route>

            <PrivateRoute path="/gallary">
              <Gallary />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/singup">
              <Singup />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>








    </div>
  );
}

export default App;
