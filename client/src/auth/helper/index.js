import Cookies from "js-cookie";

export const signup = async (user) => {
  try {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const signin = async (user) => {
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const signout = async () => {
  try {
    const response = await fetch("/api/user/logout", {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    Cookies.set("jwt", data);
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (Cookies.get("jwt")) {
    return Cookies.getJSON("jwt");
  } else {
    return false;
  }
};
