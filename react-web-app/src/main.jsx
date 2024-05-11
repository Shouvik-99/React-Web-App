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

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [{ path: "/veg-items", element: <VegItems /> },
    { path: "/non-veg-items", element: <NonVegItems /> },
    { path: "/form", element: <Form /> },
    { path: "/", element: <Body /> }]
  },
  { path: "/login", element: <Login /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-3aamag85ohi8pp6i.us.auth0.com"
      clientId="FjTnYZZvdhZfuoAsBeZpV4xTcFNm9wuG"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
