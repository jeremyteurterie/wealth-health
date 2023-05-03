import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import CreateEmployees from './pages/CreateEmployees';
import Employees from './pages/Employees';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error />}></Route>
      <Route
        path="/create-employees"
        element={<CreateEmployees />}
        errorElement={<Error />}
      ></Route>
      <Route
        path="/employees"
        element={<Employees />}
        errorElement={<Error />}
      ></Route>
      <Route path="*" element={<Error />}></Route>
    </>
  )
);

const Router = () => {
  return <RouterProvider router={Routes} />;
};

export default Router;
