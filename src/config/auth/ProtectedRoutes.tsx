import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: any;
  authenticated: boolean;
}

export const ProtectedRoute = ({
  component: Component,
  authenticated,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (authenticated) {
          return <Component {...props} />;
        } else {
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />;
        }
      }}
    />
  );
};
