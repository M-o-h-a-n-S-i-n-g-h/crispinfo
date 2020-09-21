export const createPost = async ({ fields }, id) => {
  try {
    const response = await fetch(`/api/blog/${id}/create`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const createCategory = async (category) => {
  try {
    const response = await fetch("/api/category/create", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    console.log(response);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await fetch("/api/blog", {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    console.log("error :", err);
  }
};

export const getCategories = async () => {
  const abortController = new AbortController();
  try {
    const response = await fetch(
      "/api/allCategories",
      {
        method: "GET",
      },
      { signal: abortController.signal }
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getPostById = async (id) => {
  try {
    const response = await fetch(`/api/blog/${id}`, {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async ({ fields }, id) => {
  try {
    const response = await fetch(`/api/blog/update/${id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    console.log(response);
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`/api/blog/delete/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await fetch(`/api/category/${id}`, {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getCatePosts = async (id) => {
  try {
    const response = await fetch(`/api/category/${id}/posts`, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
