import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainForm from './components/MainForm/MainForm';
import Profile from './components/Profile/Profile';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainForm></MainForm>,
  },{
    path: "/profile",
    element: <Profile></Profile>,
  },
]);

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
