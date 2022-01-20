import React, { useState } from "react";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../Redux/actions/userAction";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loaders/Loading";
import Error from "../../components/Loaders/Error";
import Success from "../../components/Loaders/Success";

const Auth = () => {
  const dispatch = useDispatch();
  const uesrInfo = useSelector((state) => state.loginUserReducer.currentUser);
  const registerUserState = useSelector((state) => state.registerUserReducer);
  const loginUserState = useSelector((state) => state.loginUserReducer);
  //Errors from register and loginState
  const { registerLoading, registerSuccess, registerError } = registerUserState;
  const { loginLoading, loginSuccess, loginError } = loginUserState;

  console.log(uesrInfo);
  const [islogin, setIslogin] = useState(false);
  const [guide, setGuide] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!islogin) {
      dispatch(loginUser(login));
      setLogin({
        email: "",
        password: "",
      });
    } else {
      if (register.password === register.confirmPassword) {
        dispatch(registerUser(register, guide));
        setRegister({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        console.log("password mismatch");
      }
    }
  };
  const handleOnChange = (e) => {
    !islogin
      ? setLogin({
          ...login,
          [e.target.name]: e.target.value,
        })
      : setRegister({
          ...register,
          [e.target.name]: e.target.value,
        });
  };

  const handleGuide = () => {
    setGuide((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="auth">
        <div className="container ">
          <form onSubmit={handleSubmit}>
            {!islogin ? (
              <>
                {loginLoading && <Loading />}
                {loginSuccess && <Success success={" Login  Successfull"} />}
                {loginError && <Error error={"Credential Error"} />}
                <div class="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={login.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    value={login.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </>
            ) : (
              <>
                {registerLoading && <Loading />}
                {registerSuccess && <Success success={"Register completed"} />}
                {registerError && <Error error={"Register failed"} />}
                <div class="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={register.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    value={register.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    value={register.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={register.confirmPassword}
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked={guide}
                      name="guide"
                      id="flexCheckDefault"
                      onChange={handleGuide}
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      guide
                    </label>
                  </div>
                </div>
              </>
            )}

            <button className="mb-2 mt-1 btn" type="submit">
              Submit
            </button>
          </form>
          {islogin ? (
            <p className="me-1 toogleAuth" onClick={() => setIslogin(false)}>
              Have an account? go to login page
            </p>
          ) : (
            <p className="me-1 toogleAuth" onClick={() => setIslogin(true)}>
              Dont have an account? Go to register page
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
