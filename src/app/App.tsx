import { BrowserRouter, Switch } from "react-router-dom";
import { ProtectedRoute } from "../config/auth/ProtectedRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignIn } from "../pages/SignIn";
import NOT_FOUND from "../components/NOT_FOUND";
import { MovieList } from "../pages/MovieList";

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
          path='/signup'
          exact
          component={SignIn}
        />
        <ProtectedRoute authenticated={true} path='/' exact component={Home} />
        <ProtectedRoute
          authenticated={true}
          path='/movies'
          exact
          component={MovieList}
        />
        <ProtectedRoute exact authenticated={true} component={NOT_FOUND} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
