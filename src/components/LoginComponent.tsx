import axios from "axios";
import { useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { LoginForm } from "../config/types/formTypes";
import { useDispatch } from "react-redux";
import "../assets/styles/alertLogin.css";
import { BASE_URLS } from "../config/auth/BASE_URLS";
import { user } from "../config/redux/actions/signUp";

export const LoginComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [alertLogin, setAlert] = useState<string>("");

  /**
   *@function handleLogin
   *@param {ChangeEvent<HTMLInputElement>}
   *@returns {void}
   *It collect the input's form and save it in the variable { LoginForm }
   */

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const login: Function = (event: ChangeEvent) => {
    event.preventDefault();
    if (
      loginForm.email === "" ||
      loginForm.password === "" ||
      loginForm.password.length < 8
    ) {
      alert("Password is too short");
      return;
    } else {
      axios
        .post(BASE_URLS + "/users/login", loginForm)
        .then(({ data }) => {
          if (data.authenticated) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("authenticated", data.authenticated);
            dispatch(user(data));

            history.push("/movies");
            return;
          } else {
            setAlert(data.message);
            return;
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div className='signup-container'>
      <div className='mainn'>
        <div className='containerr a-container' id='a-container'>
          <form
            className='form'
            id='a-form'
            onSubmit={(e) => {
              login(e);
            }}>
            <h2 className='form_title title'>Login to your Account</h2>

            <input
              className='form__input'
              type='email'
              placeholder='Email'
              name='email'
              required
              onChange={(event) => {
                handleLogin(event);
              }}
            />
            <input
              className='form__input'
              type='password'
              placeholder='Password'
              name='password'
              required
              onChange={(event) => {
                handleLogin(event);
              }}
            />
            <div>
              {alertLogin !== "" ? (
                <div className='alert'>
                  <strong>Wrong!</strong> {alertLogin}
                </div>
              ) : null}
            </div>
            <button
              className='form__button button submit'
              onClick={(e) => {
                login(e);
              }}>
              Login
            </button>
          </form>
        </div>
        <div className='containerr b-container' id='b-container'></div>
        <div className='switch' id='switch-cnt'>
          <div className='switch__circle'></div>
          <div className='switch__circle switch__circle--t'></div>
          <div className='switch__container' id='switch-c1'>
            <h2 className='switch__title title'>Welcome Back !</h2>
            <p className='switch__description description'>
              To keep connected with us please login with your personal info
            </p>
            <button
              className='switch__button button switch-btn'
              onClick={() => history.push("signup")}>
              SIGN UP
            </button>
          </div>
          <div className='switch__container is-hidden' id='switch-c2'>
            <h2 className='switch__title title'>Hello Friend !</h2>
            <p className='switch__description description'>
              Enter your personal details and start journey with us
            </p>
            <button
              className='switch__button button switch-btn'
              onClick={() => history.push("signup")}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
