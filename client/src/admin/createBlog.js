import React from "react";
import { useState } from "react";
import Base from "../Core/Base";
import { createPost } from "../apicalls/index";

const CreateBlog = (props) => {
  const { id } = props.match.params;

  const [fields, setFields] = useState({
    author: "",
    title: "",
    description: "",
    markdown: "",
    error: false,
  });

  const { author, title, description, markdown } = fields;

  const handleChange = (inputValues) => (event) => {
    setFields({ ...fields, error: false, [inputValues]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFields({ ...fields, error: false });

    await createPost({ fields }, id).then((data) => {
      if (data.error) {
        setFields({ ...fields, error: true });
        console.log(data.error);
      } else {
        console.log("SUCCESS");
        setFields({
          author: "",
          title: "",
          description: "",
          markdown: "",
          error: false,
        });
      }
    });
  };

  const createPostForm = () => {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Author</label>
            <input
              type="text"
              value={author}
              className="form-control"
              placeholder="Enter author"
              onChange={handleChange("author")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Title</label>
            <input
              type="text"
              value={title}
              className="form-control"
              placeholder="Title"
              onChange={handleChange("title")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              type="text"
              value={description}
              className="form-control"
              placeholder="Description"
              onChange={handleChange("description")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Markdown</label>
            <textarea
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
    <div>
      <Base title="Create Blog">
        <div className="row">
          <div className="col-md-6 offset-3 text-left">{createPostForm()}</div>
        </div>
        <span className="text-center text-white">{JSON.stringify(fields)}</span>
      </Base>
    </div>
  );
};

export default CreateBlog;
