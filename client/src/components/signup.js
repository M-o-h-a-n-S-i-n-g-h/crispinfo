import React, { useState, Fragment } from "react";
import UserNav from "../Core/UserNav";
import { useHistory } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";
import CustomizedSnackbars from "./customComponents/ErrorMessage";
import { Form, Button, Label, GlobalSignup } from "../utils/index";
import { signup } from "../auth/helper";

const Signup = () => {
  var history = useHistory();
  const [fields, setFields] = useState({
    email: "",
    name: "",
    password: "",
    error: false,
    success: false,
    loading: false,
    input: false,
  });

  const { name, email, password, loading, error } = fields;

  const handleChange = (inputValues) => (event) => {
    setFields({ ...fields, error: false, [inputValues]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //!TODO:Add fields validation
    setFields({ ...fields, error: false, loading: true });
    setTimeout(() => {
      signup({ name, email, password }).then((data) => {
        if (data.error) {
          setFields({
            ...fields,

            error: data.error,
            loading: false,
          });
          history.push("/user/signup");
        } else {
          setFields({
            email: "",
            password: "",
            success: true,
            loading: false,
            error: false,
          });

          history.push("/allPosts");
        }
      });
    }, 3000);
  };

  const style = {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "-36px",
    marginLeft: "4em",
  };

  const loadingMesage = () => {
    return (
      loading && (
        <div style={style}>
          <RotateSpinner size={40} color="#fa26a0" loading={true} />
        </div>
      )
    );
  };

  const errorMessage = () => {
    return error && <CustomizedSnackbars error={error} />;
  };

  const signupForm = () => {
    return (
      <Fragment>
           <hr className="underline" />
        <GlobalSignup>
          <h2 className="text-center text-white">Signup Page</h2>
          <Form onSubmit={onSubmit}>
            <div className="form-group">
              <Label htmlFor="exampleInputEmail1"> Name</Label>
              <input
                type="name"
                onChange={handleChange("name")}
                value={name}
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="exampleInputEmail1">Email address</Label>
              <input
                type="email"
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <Label htmlFor="exampleInputPassword1">Password</Label>
              <input
                onChange={handleChange("password")}
                value={password}
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </Form>
          {loadingMesage()}
        </GlobalSignup>
      </Fragment>
    );
  };
  return (
    <div>
      <UserNav />
      <main>
        <h1 className="text-center">SIGNUP PAGE</h1>
        {signupForm()}
        {errorMessage()}
      </main>
    </div>
  );
};

export default Signup;
