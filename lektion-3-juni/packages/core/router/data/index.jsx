import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "@jokeApp/landing-page";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "*", element: <h1>This is not the page you are looking for.</h1> },
]);

export { router };
