// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SubAccountsStats from "./pages/SubAccountsStats";
import SubAccountDetails from "./pages/SubAccountDetails";

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
