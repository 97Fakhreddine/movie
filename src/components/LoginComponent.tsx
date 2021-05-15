import { useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { LoginForm } from "../config/types/formTypes";

export const LoginComponent = () => {
  const history = useHistory();

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

  return (
    <div className='signup-container'>
      <div className='mainn'>
        <div className='containerr a-container' id='a-container'>
          <form className='form' id='a-form'>
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
            <button className='form__button button submit'>Login</button>
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
