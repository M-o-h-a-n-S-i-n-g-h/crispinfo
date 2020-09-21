import React, { useState, useEffect } from "react";
import Base from "../Core/Base";
import { updatePost, getPostById } from "../apicalls/index";

const UpdatePost = ({ match }) => {
  const { id } = match.params;
  const [fields, setFields] = useState({
    title: "",
    author: "",
    description: "",
    markdown: "",
  });
  const { title, author, description, markdown } = fields;

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    getPostById(id)
      .then((data) => {
        if (data) {
          setFields({
            title: data.title,
            author: data.author,
            description: data.description,
            markdown: data.markdown,
          });
        } else {
          console.log("ERROR IN FETCHING DATA");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (inputValues) => (event) => {
    setFields({
      ...fields,
      [inputValues]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    updatePost({ fields }, id)
      .then((response) => {
        if (response) {
          console.log("SUCCESSFULLY UPDATED ");
          setFields({
            title: "",
            author: "",
            description: "",
            markdown: "",
          });
        } else {
          console.log("FAILED TO UPDATE POST");
        }
      })
      .catch((err) => console.log(err));
  };

  const createPostUpdateForm = () => {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Author</label>
            <input
              type="text"
              value={author}
              className="form-control"
              placeholder="Enter author"
              onChange={handleChange("author")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Title</label>
            <input
              type="text"
              value={title}
              className="form-control"
              placeholder="Title"
              onChange={handleChange("title")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword3">Description</label>
            <input
              type="text"
              value={description}
              className="form-control"
              placeholder="Description"
              onChange={handleChange("description")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword4">Markdown</label>
            <textarea
              style={{ height: "50vh" }}
              type="text"
              value={markdown}
              className="form-control"
              placeholder="Content Markdown"
              onChange={handleChange("markdown")}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <Base title="Update Post Page" description="Updating the posts">
      <div className="container text-left">{createPostUpdateForm()}</div>
    </Base>
  );
};

export default UpdatePost;
