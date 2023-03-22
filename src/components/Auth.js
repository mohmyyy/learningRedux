import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth";
// import { authAction } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isAuntheticated);
  const emailRef = useRef();
  const passwordRef = useRef();
  const userHandler = (event) => {
    event.preventDefault();
    console.log(login);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(authAction.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={userHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
