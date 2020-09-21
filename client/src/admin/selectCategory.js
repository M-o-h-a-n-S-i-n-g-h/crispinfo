import React, { useEffect, useState } from "react";
import Base from "../Core/Base";
import { Link } from "react-router-dom";
import { getCategories } from "../apicalls/index";

const SelectCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((data) => {
      if (!data) {
        console.log("CANNOT FETCH CATEGORIES CHECK FOR ERRORS");
      } else {
        setCategories(data);
      }
    });
  };

  return (
    <Base title="Select category" description="Select Category to add blog">
      <div>
        <Link to="/admin" className="btn btn-primary btn-md mb-4">
          Admin Home
        </Link>
      </div>
      <div className="row">
        <div className="col-12">
          {categories.map((category, index) => {
            return (
              <li className="text-white" key={index}>
                <Link to={`/blog/${category._id}/create`}>
                  <h4>{category.name}</h4>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default SelectCategory;
