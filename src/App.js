import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import Details from "./components/Details/Details";
import AddCourses from "./pages/Admin/AddCourses";
import AddTeacher from "./pages/Admin/AddTeacher";
import Admin from "./pages/Admin/Admin.jsx";
import UserList from "./pages/Admin/UserList";
import Atricles from "./pages/Articles/Atricles";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import AdminPrivateRoute from "./pages/PrivateRoute/AdminPrivateRoute";
import ArticleUpdate from "./pages/Admin/ArticleUpdate";
import Khagrachari from "./pages/TourGuide/Khagrachari";
import Bandarban from "./pages/TourGuide/Bandarban";
import Rangamati from "./pages/TourGuide/Rangamati";
import PeopleList from "./components/PeopleList/PeopleList";
import PeopleDetails from "./components/PeopleList/PeopleDetails";
import AddTourGuide from "./pages/Admin/AddTourguide";
import TourGuideList from "./pages/Admin/TourGuideList";
import EditTourGuide from "./pages/Admin/EditTourGuide";
import Addtourguide from "./pages/TourGuide/Addtourguide";
import TourguidePrivateRoute from "./pages/PrivateRoute/TourguidePrivateRoute";
import Addreview from "./components/Review/Addreview";
import { useRouteMatch } from "react-router-dom";
import { Suspense } from "react";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import District from "./pages/TourGuide/District";
// const Home = React.lazy(() => import("./pages/Home/Home"));
const Details = React.lazy(() => import("./components/Details/Details"));

function App() {
  const { path } = useRouteMatch();

  return (
    <>
      <Router>
        <Route
          exact
          path={[
            "/articles",
            "/auth",
            "/:name/:id",
            "/addinfo",
            "/review",
            "/khagrachari",
            "/rangamati",
            "/bandarban",
            "/filterTourguidesList",
            "/:guideId",
            "/",
          ]}
        >
          <Switch>
            <Route exact path="/auth" component={Auth}></Route>

            <Route exact path="/articles" component={Atricles}></Route>
            <TourguidePrivateRoute
              path="/addinfo"
              component={Addtourguide}
            ></TourguidePrivateRoute>
            <Route exact path="/review" component={Addreview}></Route>
            <Route exact path="/khagrachari" component={Khagrachari}></Route>
            <Route exact path="/rangamati" component={Rangamati}></Route>
            <Route exact path="/bandarban" component={Bandarban}></Route>
            {/* <Route exact path="/:district" component={District}></Route> */}
            <Route exact path="/:district/guides" component={PeopleList}></Route>
            <Route exact path="/:guideId" component={PeopleDetails}></Route>
            <Route exact path="/" component={Home}></Route>
            <ErrorBoundary>
              <Suspense fallback={() => <div>Loading</div>}>
                <Route exact path="/:name/:id" component={Details}></Route>
              </Suspense>
            </ErrorBoundary>
          </Switch>
        </Route>
      </Router>

      <Router>
        <Route
          exact
          path={[
            "/admin",
            "/admin/addcourse",
            "/admin/addteacher",
            "/admin/addtourguide",
            "/admin/tourguidelist",
            "/admin/edit/:id",
            "/admin/tourguide/:id",
            "/admin/UserList",
          ]}
        >
          <Switch>
            <AdminPrivateRoute exact path="/admin">
              <Admin />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/addcourse">
              <AddCourses />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/addteacher">
              <AddTeacher />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/addtourguide">
              <AddTourGuide />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/tourguidelist">
              <TourGuideList />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/edit/:id">
              <ArticleUpdate />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/tourguide/:id">
              <EditTourGuide />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/UserList">
              <UserList />
            </AdminPrivateRoute>
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
