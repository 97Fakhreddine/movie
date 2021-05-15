import { SignUp } from "../components/SignUp";
import { Copyright } from "../components/CopyRight";
import { NavBar } from "../components/NavBar";
export const SignIn = () => {
  return (
    <div style={{ backgroundColor: "none", maxWidth: "100%" }}>
      <div>
        <NavBar />
      </div>
      <div>
        <SignUp />
      </div>
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
