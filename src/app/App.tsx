import { BrowserRouter, Switch } from "react-router-dom";
import { ProtectedRoute } from "../config/auth/ProtectedRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignIn } from "../pages/SignIn";
import NOT_FOUND from "../components/NOT_FOUND";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          path='/login'
          exact
          component={Login}
          authenticated={true}
        />
        <ProtectedRoute
          authenticated={true}
          path='/signin'
          exact
          component={SignIn}
        />
        <ProtectedRoute authenticated={true} path='/' exact component={Home} />
        <ProtectedRoute exact authenticated={true} component={NOT_FOUND} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
