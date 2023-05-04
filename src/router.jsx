import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Employees from './pages/Employees';
import Error from './pages/Error';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error />}></Route>
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
