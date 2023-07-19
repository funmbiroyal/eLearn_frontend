import { RouterProvider, createBrowserRouter } from "react-router-dom";

import appRoutes from "./routes";

const router = createBrowserRouter(appRoutes);

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter;