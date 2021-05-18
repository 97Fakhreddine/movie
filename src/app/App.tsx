import { BrowserRouter, Switch } from "react-router-dom";
import { ProtectedRoute } from "../config/auth/ProtectedRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignIn } from "../pages/SignIn";
import NOT_FOUND from "../components/NOT_FOUND";
import { MovieList } from "../pages/MovieList";
import { authUser } from "../config/types/auth";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { BASE_URLS } from "../config/auth/BASE_URLS";
import { useDispatch } from "react-redux";
import { auth } from "../config/redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  const [AUTH, setAuth] = useState<authUser | null>(null);

  const checkUserAuth = useCallback(() => {
    // get token & authenticated from the local storage and check if they exists
    const token = localStorage.getItem("token");
    const authenticated = localStorage.getItem("authenticated");

    const header = {
      headers: {
        authorisation: "Bearer " + token,
      },
    };
    if (token && authenticated) {
      axios
        .get(BASE_URLS + "/auth/verify/", header)
        .then(({ data }) => {
          if (data.authenticated) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("authenticated", data.authenticated);
            setAuth({ authenticated: true, token: data.token });
            dispatch(auth({ authenticated: true, token: data.token }));
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("authenticated");
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          localStorage.removeItem("authenticated");
        });
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("authenticated");
    }
  }, [AUTH]);

  useEffect(() => {
    // execute this funciton each time the page reload
    let isMounted = true;
    if (isMounted) {
      checkUserAuth();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          path='/login'
          exact
          component={Login}
          authenticated={AUTH?.authenticated ? false : true}
        />
        <ProtectedRoute
          authenticated={AUTH?.authenticated ? false : true}
          path='/signup'
          exact
          component={SignIn}
        />
        <ProtectedRoute authenticated={true} path='/' exact component={Home} />
        <ProtectedRoute
          authenticated={AUTH !== null ? AUTH.authenticated : false}
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
