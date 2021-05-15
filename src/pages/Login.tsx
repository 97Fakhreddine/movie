import { NavBar } from "../components/NavBar";
import { LoginComponent } from "../components/LoginComponent";
import { Copyright } from "../components/CopyRight";
export const Login = () => {
  return (
    <div>
      <NavBar />
      <LoginComponent />
      <div
        style={{
          backgroundColor: "#fff",
          maxWidth: "50%",
          position: "absolute",
          left: "50vh",
          right: "20vh",
          minWidth: "50%",
          borderRadius: "50%",
          borderTop: "none",
          padding: "1%",
        }}>
        <Copyright />
      </div>
    </div>
  );
};
