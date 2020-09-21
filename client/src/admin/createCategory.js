import React from "react";
import { useState } from "react";
import Base from "../Core/Base";
import { createCategory } from "../apicalls/index";

const Createcategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError(false);
    createCategory({ name }).then((data) => {
      if (!data) {
        setName({ ...name, error: true });
        console.log(error);
        console.log("FAILED");
      } else {
        setError(false);
        setName("");
      }
    });
  };

  const categoryForm = () => {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="text-light">Name</label>
            <input
              onChange={handleChange}
              value={name}
              type="text"
              className="form-control"
              placeholder="Enter category"
            />
          </div>
        </form>
        <button onClick={onSubmit} className="btn btn-success ">
          Submit
        </button>
      </div>
    );
  };

  return (
    <div>
      <Base title="Create category">
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">{categoryForm()}</div>
        </div>
        <p className="text-center text-white">
          {JSON.stringify({ name: name, error: error })}
        </p>
      </Base>
    </div>
  );
};

export default Createcategory;
