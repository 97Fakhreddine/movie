import { BrowserRouter, Switch } from "react-router-dom";
import { ProtectedRoute } from "../config/auth/ProtectedRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignIn } from "../pages/SignIn";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
