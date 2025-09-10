// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SubAccountsStats from "./components/SubAccountsStats";
import SubAccountDetails from "./components/SubAccountDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <SubAccountsStats />,
      },
      {
        path: "subaccount-details/:userLocationId",
        element: <SubAccountDetails />,
      },
    ],
  },
]);

export default router;
