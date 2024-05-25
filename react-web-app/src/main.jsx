import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import VegItems from './components/VegItems.jsx'
import NonVegItems from './components/NonVegItems.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Body from './components/Body.jsx'
import Form from './components/Form.jsx'
import { Provider } from "react-redux"
import store from './store/MainStore.js'
import Login from './components/Login.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import AllItems from './components/AllItems.jsx'
import ItemUpdateForm from './components/ItemUpdateForm.jsx'
import MyProfileComponent from './components/MyProfile.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [{ path: "/veg-items", element: <VegItems /> },
    { path: "/non-veg-items", element: <NonVegItems /> },
    { path: "/form", element: <Form /> },
    { path: "/", element: <Body /> },
    { path: "/all-items", element: <AllItems />},
    { path: "/my-profile", element: <MyProfileComponent />}
    // {path: "/update-form/:id", element: <ItemUpdateForm />}
  ]
  },
  { path: "/login", element: <Login /> },
  {path: "/update-form/:id", element: <ItemUpdateForm />}
])
const domain = import.meta.env.VITE_REACT_WEB_APP_DOMAIN;
const clientId = import.meta.env.VITE_REACT_WEB_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
