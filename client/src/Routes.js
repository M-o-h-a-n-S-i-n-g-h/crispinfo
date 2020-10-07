import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Global } from "./utils";
import Loading from "./components/customComponents/LoadingComponent";
import About from "./Core/About";
const Posts = React.lazy(() => import("./components/Posts"));
const Categories = React.lazy(() => import("./components/Categories"));
const ViewLayout = React.lazy(() => import("./components/viewLayout"));
const HomePage = React.lazy(() => import("./Core/HomePage"));
const CateBlog = React.lazy(() => import("./components/CateBlog"));
const AdminDashboard = React.lazy(() => import("./admin/AdminDashboard"));
const Signin = React.lazy(() => import("./components/signin"));
const Signup = React.lazy(() => import("./components/signup"));
const ManagePosts = React.lazy(() => import("./admin/ManagePosts"));
const SelectCategory = React.lazy(() => import("./admin/selectCategory"));
const AdminRoute = React.lazy(() => import("./auth/helper/AdminRoute"));
const Createcategory = React.lazy(() => import("./admin/createCategory"));
const CreateBlog = React.lazy(() => import("./admin/createBlog"));
const UpdatePost = React.lazy(() => import("./admin/UpdatePost"));

const Routes = () => {
  return (
    <div>
      <Global />
      <BrowserRouter>
        <Switch>
          <React.Suspense fallback={<Loading />}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/allposts" component={Posts}></Route>
            <Route path="/about" component={About}></Route>
            <AdminRoute
              exact
              path="/blog/:id/create"
              component={CreateBlog}
            ></AdminRoute>
            <AdminRoute
              exact
              path="/create/category"
              component={Createcategory}
            ></AdminRoute>
            <AdminRoute
              exact
              path="/admin"
              component={AdminDashboard}
            ></AdminRoute>
            <Route exact path="/admin/login" component={Signin}></Route>
            <Route exact path="/user/signup" component={Signup}></Route>
            <Route exact path="/user/login" component={Signin}></Route>
            <Route exact path="/categories" component={Categories}></Route>
            <Route exact path="/blog/:id" component={ViewLayout}></Route>
            <Route
              exact
              path="/category/:id/posts"
              component={CateBlog}
            ></Route>
            <AdminRoute
              exact
              path="/manage/posts"
              component={ManagePosts}
            ></AdminRoute>
            <AdminRoute
              path="/update/post/:id"
              component={UpdatePost}
            ></AdminRoute>
            <AdminRoute
              path="/selectCategory"
              component={SelectCategory}
            ></AdminRoute>
          </React.Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
