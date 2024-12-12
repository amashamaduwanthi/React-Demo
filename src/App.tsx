
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {RoutLayOut} from "./components/RoutLayOut.tsx"
import {CustomerProvider} from "./components/CustomerProvider.tsx";






function App() {
  const routes=createBrowserRouter([
        {
          path:'',
          element :<RoutLayOut/>,
          children:[
              {path :'',element :<Dashboard/>},
              {path :'/add',element :<AddCustomer/>},
              {path :'/update',element :<UpdateCustomer/>},
              {path :'/delete',element :<DeleteCustomer/>},
          ]
        },
      ])


  //   {path :'',element :<Dashboard/>},
  //   {path :'/add',element :<AddCustomer/>},
  //   {path :'/update',element :<UpdateCustomer/>},
  //   {path :'/delete',element :<DeleteCustomer/>},
  // ])

  return (
    <>
      <CustomerProvider>
        <RouterProvider   router={routes}/>
      </CustomerProvider>

    </>
  )
}

export default App
