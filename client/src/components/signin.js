import React, { useState, Fragment } from "react";
import UserNav from "../Core/UserNav";
import { useHistory } from "react-router-dom";
import { signin, authenticate } from "../auth/helper";
import { RotateSpinner } from "react-spinners-kit";
import { GlobalSignin, Form, Button, Label } from "../utils/index";
import CustomizedSnackbars from "./customComponents/ErrorMessage";

const Signin = () => {
  var history = useHistory();
  const [fields, setFields] = useState({
    email: "",
    password: "",
    error: false,
    success: false,
    loading: false,
    input: false,
  });
  const { email, password, error, loading } = fields;

  const handleChange = (inputValues) => (event) => {
    setFields({ ...fields, [inputValues]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFields({ ...fields, error: false, loading: true });
    setTimeout(() => {
      signin({ email, password }).then((data) => {
        if (data.error) {
          setFields({
            ...fields,
            error: data.error,
            success: false,
            loading: false,
          });
          // history.push("/user/signin");
        } else {
          authenticate(data, () => {
            setFields({
              email: "",
              password: "",
              success: true,
              loading: false,
              error: false,
            });
            history.push("/allPosts");
          });
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
        <main style={style}>
          <RotateSpinner size={40} color="#fa26a0" loading={true} />
        </main>
      )
    );
  };

  const errorMessage = () => {
    return error && <CustomizedSnackbars error={error} />;
  };

  //!STYLES

  const signinForm = () => {
    return (
      <Fragment>
        <GlobalSignin>
          <div>
            <h1 className="text-center">Signin Page</h1>
          </div>
          <hr className="underline" />
          <Form onSubmit={onSubmit}>
            <div className="form-group">
              <Label htmlFor="exampleInputEmail1">Email</Label>
              <input
                type="text"
                value={email}
                className="form-control"
                placeholder="Enter Email"
                onChange={handleChange("email")}
                required
              />
            </div>
            <div className="form-group">
              <Label htmlFor="exampleInputPassword1">Password</Label>
              <input
                type="password"
                value={password}
                className="form-control"
                placeholder="Password"
                onChange={handleChange("password")}
                required
              />
            </div>
            <Button className="btn btn-primary" type="submit">
              Submit
            </Button>
          </Form>
          {loadingMesage()}
        </GlobalSignin>
      </Fragment>
    );
  };
  return (
    <div>
      <UserNav />

      <main>
        {signinForm()}
        {errorMessage()}
      </main>
    </div>
  );
};

export default React.memo(Signin);
