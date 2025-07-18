import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Componet/MainLayout";
import FetchOld from "./Pages/FetchOld";
import FetchRq from "./Pages/FetchRq";
import Home from "./Pages/Home";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchIndData from './Componet/FetchIndData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "FetchOld",
        element: <FetchOld />,
      },
      {
        path: "FetchRq",
        element: <FetchRq />,
      },

        
      
      {
        path: "/FetchRq/:id",
        element: <FetchIndData />,
      },

   
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
        <ReactQueryDevtools initialIsOpen={false} />

      </QueryClientProvider>


    </>
  )
}

export default App;
